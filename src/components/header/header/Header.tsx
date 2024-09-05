import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../../assets/header/Logo.svg";
import style from "./Header.module.scss";
import Menu from "./menu/Menu";
import Button from "../ui/button/Button";
import Burger from "../ui/burger/Burger";

const Header: React.FC = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const isMobile = windowWidth < 1200;

  return (
    <>
      <header className={style.header}>
        <Logo className={style.logo} />
        <div
          className={style.menuBtnWrapper}
          style={{ flexDirection: isMobile ? "row-reverse" : "row" }}
        >
          {isMobile ? <Burger /> : <Menu />}
          <Button text="Download CV" height="52px" width="192px" />
        </div>
      </header>
    </>
  );
};

export default Header;
