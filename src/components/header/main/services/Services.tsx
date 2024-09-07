import React from "react";
import style from "./Services.module.scss";
import Title from "../../ui/title/Title";
import { ReactComponent as IconUI } from "./../../../../assets/main/services/icon-ui.svg";
import { ReactComponent as IconWeb } from "./../../../../assets/main/services/icon-web.svg";
import { ReactComponent as IconDesign } from "./../../../../assets/main/services/icon-design.svg";
import { ReactComponent as IconGrafic } from "./../../../../assets/main/services/icon-grafic.svg";
import ServicesCard from "../../ui/servicesCard/ServicesCard";
import Wrapper from "../../ui/wrapper/Wrapper";

const Services: React.FC = () => {
  return (
    <>
      <Wrapper>
        <section className={style.servicesBlock}>
          <Title
            title="Services"
            subTitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
          />
          <div className={style.servicesCardBlock}>
            <ServicesCard
              title="UI/UX"
              description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
              children={<IconUI />}
            />
            <ServicesCard
              title="Web Design "
              description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
              children={<IconWeb />}
            />
            <ServicesCard
              title="App Design"
              description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
              children={<IconDesign />}
            />
            <ServicesCard
              title="Graphic Design "
              description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"
              children={<IconGrafic />}
            />
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Services;
