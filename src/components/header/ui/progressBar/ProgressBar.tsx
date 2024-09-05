import React, { useState } from "react";
import style from './ProgressBar.module.scss';


const ProgressBar: React.FC = () => {

  const [progress, setProgress] = useState(70);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <>
      <div className={style.progressBar}>
        <div className={style.progressFill} style={{ width: `${progress}%`, backgroundColor: '#FF6300 !important' }} />
      </div>
      <input
        className={style.progressRange}
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
      />
    </>
  );
};

export default ProgressBar;
