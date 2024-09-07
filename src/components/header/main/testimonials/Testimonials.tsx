import React, { useRef, useState } from "react";
import style from "./Testimonials.module.scss";
import Title from "../../ui/title/Title";
import avatar from "../../../../assets/main/testimonials/avatar.png";
import Testimonial from "../../ui/testimonial/Testimonial";

interface TestimonialsData {
  id: number;
  img: string;
  name: string;
  position: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonialsData: TestimonialsData[] = [
    {
      id: 1,
      img: avatar,
      name: "Name",
      position: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
    },
    {
      id: 2,
      img: avatar,
      name: "Name",
      position: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
    },
    {
      id: 3,
      img: avatar,
      name: "Name",
      position: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
    },
    {
      id: 4,
      img: avatar,
      name: "Name",
      position: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur. Id purus placerat scelerisque ullamcorper habitasse egestas.Nunc gravida egestas suspendisse volutpat suscipit suspendisse faucibus amet convallis.",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState<number>(1);
  const [activeButton, setActiveButton] = useState<number>(activeTestimonial);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTestimonialClick = (id: number) => {
    setActiveTestimonial(id);
    setActiveButton(id);

    if (testimonialRefs.current[id]) {
      testimonialRefs.current[id]!.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };

  return (
    <>
      <section className={style.testimonialsBlock}>
        <Title
          title="Testimonials"
          subTitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
        />
        <div className={style.testimonialsListBlock}>
          {testimonialsData.map(({ id, img, name, position, text }) => (
            <Testimonial
              key={id}
              onClick={() => handleTestimonialClick(id)}
              ref={(el) => (testimonialRefs.current[id] = el)}
              className={ activeTestimonial === id ? true : false}
              img={img}
              name={name}
              position={position}
              text={text}
            />
          ))}
        </div>
        <div className={style.buttonBlock}>
          {testimonialsData.map((b) => (
            <button
              className={style.button}
              key={b.id}
              style={{
                background: activeButton === b.id ? "#FD6F00" : "#D9D9D9",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
