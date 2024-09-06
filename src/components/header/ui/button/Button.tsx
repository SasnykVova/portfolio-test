import React from "react";
import style from "./Button.module.scss";


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
