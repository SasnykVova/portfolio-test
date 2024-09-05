import React from "react";
import style from "./Button.module.scss";
import { OneTest } from './../../../../../node_modules/tsconfig-paths/lib/__tests__/data/match-path-data.d';


interface ButtonProps {
    height?: string;
    width?: string
    text: string;
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({height = 'auto', width = 'auto', text, onClick}) => {
  return (
    <>
      <button className={style.button} style={{height: height, width: width}}>{text}</button>
    </>
  );
};

export default Button;
