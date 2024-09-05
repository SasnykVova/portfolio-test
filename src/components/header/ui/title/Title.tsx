import React from "react";
import style from './Title.module.scss';

interface TitleProps {
    title: string
    subTitle: string
}

const Title: React.FC<TitleProps> = ({title, subTitle}) => {
  return (
    <>
      <div className={style.titleBlock}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.subTitle}>
          {subTitle}
        </div>
      </div>
    </>
  );
};

export default Title;
