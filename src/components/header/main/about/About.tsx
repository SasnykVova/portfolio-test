import React from "react";
import photo from "../../../../assets/main/image-2.svg";
import style from "./About.module.scss";
import ProgressBar from "../../ui/progressBar/ProgressBar";

interface SkillData {
  id: number
  title: string
  value: number
}

const skillsData: SkillData[] = [
  {id: 1, title: 'UX', value: 95},
  {id: 1, title: 'Website Design', value: 87},
  {id: 1, title: 'App Design ', value: 92},
  {id: 1, title: 'Graphic Design ', value: 84},
]

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
            {skillsData.map(s => <ProgressBar key={s.id} title={s.title} defaultValue={s.value}/>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
