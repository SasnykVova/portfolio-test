import React from "react";
import style from './Burger.module.scss';

const Burger: React.FC = () => {
  return (
    <>
      <menu className={style.burger}>
        <span className={style.midlleLine}></span>
      </menu>
    </>
  );
};

export default Burger;
