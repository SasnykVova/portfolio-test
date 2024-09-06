import React, { useState } from "react";
import style from "./ProgressBar.module.scss";

interface ProgressBarProps {
  title: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
}) => {
  const [value, setProgress] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <>
      <div className={style.progressBar}>
        <h5 className={style.title}>{title}</h5>
        <div className={style.rangeContainer}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className={style.rangeInput}
            style={{
              background: `linear-gradient(to right, #FF6300 ${
                ((value - min) / (max - min)) * 100
              }%, #d3d3d3 ${((value - min) / (max - min)) * 100}%)`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
