import React from "react";
import style from "./Testimonials.module.scss";
import Title from "../../ui/title/Title";
import avatar from '../../../../assets/main/testimonials/avatar.png';

const Testimonials: React.FC = () => {
  return (
    <>
      <section className={style.testimonialsBlock}>
        <Title
          title="Testimonials"
          subTitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
        />
        <div className={style.testimonialsListBlock}>
            <div className={style.item}>
                <div className={style.imgWrapper}><img className={style.img} src={avatar} alt="avatar"/></div>
                <div className={style.textBlock}>
                    <p className={style.text}>Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.
                        Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.</p>
                    <div className={style.name}>Name</div>
                    <div className={style.position}>CEO</div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
