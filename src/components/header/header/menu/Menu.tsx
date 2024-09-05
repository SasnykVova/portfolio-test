import React from "react";
import style from './Menu.module.scss';

const Menu: React.FC = () => {
  return (
    <>
      <nav className={style.menu}>
        <ul className={style.menuList}>
        {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact Us'].map(item => (
        <li key={item} className={style.item}>
          {item}
        </li>
      ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
