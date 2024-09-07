import React, { useState } from "react";
import style from "./Meet.module.scss";
import photo from "../../../../../assets/main/image-1.svg";
import { ReactComponent as Facebook } from ".././../../../../assets/main/Facebook - Negative.svg";
import { ReactComponent as Twitter } from ".././../../../../assets/main/Twitter - Negative.svg";
import { ReactComponent as Instagram } from ".././../../../../assets/main/Instagram - Negative.svg";
import { ReactComponent as LinkedIn } from ".././../../../../assets/main/LinkedIn - Negative.svg";
import Button from "../../../ui/button/Button";
import Wrapper from "../../../ui/wrapper/Wrapper";

type Theme = 'light' | 'dark';

const Meet: React.FC = () => {

  // const { theme, toggleTheme } = useTheme();

  const [ theme, setTheheme ] = useState<Theme>('dark');

  return (
    <>
      <Wrapper>
        <section className={`${style.greetSection} ${style[theme]}`}>
          <div className={style.greetingBlock}>
            <div className={style.greet}>Hi I am</div>
            <div className={style.name}>Muhammad Bin Jameel</div>
            <div className={style.positionF}>UI & UX</div>
            <div className={style.positionS}>Designer</div>
            <div className={style.text}>
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
              tellus consectetur lacus
            </div>
            <Button text="Hire Me" width="188px" height="52px" />
          </div>
          <div className={style.photoBlock}>
            <div className={style.imgWrapper}>
              <img className={style.img} src={photo} alt="person" />
            </div>
            <div className={style.socialNetwork}>
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkedIn />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Meet;
