import React from "react";
import style from "./Menu.module.scss";

interface MenuData {
  id: number;
  name: string;
  href: string;
}

const Menu: React.FC = () => {
  const menuData: MenuData[] = [
    { id: 1, name: "Home", href: "#home" },
    { id: 1, name: "About", href: "#about" },
    { id: 1, name: "Services", href: "#services" },
    { id: 1, name: "Projects", href: "#projects" },
    { id: 1, name: "Testimonials", href: "#testimonials" },
    { id: 1, name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <nav className={style.menu}>
        <ul className={style.menuList}>
          {menuData.map((item) => (
            <a key={item.id} href={item.href}>
              <li className={style.item}>
                {item.name}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
