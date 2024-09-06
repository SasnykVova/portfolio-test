import React from "react";
import photo from "../../../../assets/main/image-2.svg";
import style from "./About.module.scss";
import ProgressBar from "../../ui/progressBar/ProgressBar";

const About: React.FC = () => {
  return (
    <>
      <section className={style.aboutBlock}>
        <div className={style.imgWraapper}>
          <img src={photo} alt="person" />
        </div>
        <div className={style.titleSkillsBlock}>
          <div className={style.titleWrapper}>
            <h3 className={style.title}>About Me</h3>
            <div className={style.text}>
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
              tellus consectetur lacus
            </div>
          </div>
          <div className={style.skillsBlock}>
            <h5>UX</h5>
            <ProgressBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
