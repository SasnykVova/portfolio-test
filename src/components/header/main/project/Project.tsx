import React, { useState } from "react";
import style from "./Project.module.scss";
import Title from '../../ui/title/Title';
import ButtonGrey from "../../ui/buttonGrey/ButtonGrey";
import projectFirst from './../../../../assets/main/project/projectFirst.png';

interface ButtonData {
    id: number;
    text: string;
  }

const Project: React.FC = () => {

    const [activeButton, setActiveButton] = useState<number>(1);

    const handleButtonClick = (id: number) => {
        setActiveButton(id);
      };

    const buttons: ButtonData[] = [
        { id: 1, text: 'All' },
        { id: 2, text: 'UI UX' },
        { id: 3, text: 'Website Design' },
        { id: 4, text: 'App Design' },
        { id: 5, text: 'Graphic Design' },
      ];

  return (
    <>
      <section className={style.projectBlock}>
        <Title 
        title="My Projects" 
        subTitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
        />
        <div className={style.filterButtonBlock}>
            {buttons.map(b => <ButtonGrey key={b.id} id={b.id} text={b.text} onClick={() => handleButtonClick(b.id)} isActive={activeButton === b.id}/>)}
        </div>
        <div className={style.filterProject}>
            <div className={style.projectCard}>
                <img src={projectFirst} alt="WebSite iamge"/>
                <div className={style.title}>UI UX</div>
                <div className={style.description}>AirCalling Landing Page Design </div>
            </div>
            <div className={style.projectCard}>
                <img src={projectFirst} alt="WebSite iamge"/>
                <div className={style.title}>UI UX</div>
                <div className={style.description}>AirCalling Landing Page Design </div>
            </div>
            <div className={style.projectCard}>
                <img src={projectFirst} alt="WebSite iamge"/>
                <div className={style.title}>UI UX</div>
                <div className={style.description}>AirCalling Landing Page Design </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Project;
