import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../../assets/header/Logo.svg";
import style from "./Header.module.scss";
import Menu from "./menu/Menu";
import Button from "../ui/button/Button";
import Burger from "../ui/burger/Burger";
import Wrapper from "../ui/wrapper/Wrapper";

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallDesctop = windowWidth < 1200;
  const isMobile = windowWidth < 768;
  const smallmobile = windowWidth < 480;

  return (
    <>
      <Wrapper>
        <header className={style.header}>
          <Logo className={style.logo} />
          <div
            className={style.menuBtnWrapper}
            style={{ flexDirection: isSmallDesctop ? "row-reverse" : "row" }}
          >
            {isSmallDesctop ? <Burger /> : <Menu />}
            {smallmobile ? (
              ""
            ) : (
              <Button
                text="Download CV"
                height="52px"
                width={isMobile ? "150px" : "192px"}
              />
            )}
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
