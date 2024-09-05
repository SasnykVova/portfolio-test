import React from "react";
import style from "./ButtonGrey.module.scss";


interface ButtonGreyProps {
    id: number
    height?: string;
    width?: string
    isActive: boolean
    text: string;
    onClick?: (id: number) => void
}

const ButtonGrey: React.FC<ButtonGreyProps> = ({height = 'auto', width = 'auto', isActive, text, id, onClick}) => {

    const handleClick = () => {
        if (onClick) {
          onClick(id);
        }
      };
  return (
    <>
      <button className={style.button} 
      style={{height: height, width: width, backgroundColor: isActive ? '#FD6F00' : '#F3F3F3', color: isActive ? 'white': '#000'}}
      onClick={handleClick}
      >{text}</button>
    </>
  );
};

export default ButtonGrey;
