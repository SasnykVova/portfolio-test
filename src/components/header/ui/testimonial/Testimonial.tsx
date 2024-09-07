import React, { ForwardedRef, forwardRef } from "react";
import style from "./Testimonial.module.scss";

interface TestimonialProps {
    img: string;
    text: string;
    name: string;
    position: string;
    onClick: () => void;
    className?: boolean; // className не є обов'язковим
}

// Використовуємо forwardRef для передавання рефів
const Testimonial = forwardRef<HTMLDivElement, TestimonialProps>(({ img, text, name, position, onClick, className }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            className={`${style.item} ${className ? style.active : ''}`} // Перевіряємо className на наявність
            onClick={onClick}
            ref={ref}
        >
            <div className={style.imgWrapper}>
                <img className={style.img} src={img} alt="avatar" />
            </div>
            <div className={style.textBlock}>
                <p className={style.text}>
                    {text}
                </p>
                <div className={style.name}>{name}</div>
                <div className={style.position}>{position}</div>
            </div>
        </div>
    );
});

// Додаємо displayName для полегшення відлагодження
Testimonial.displayName = 'Testimonial';

export default Testimonial;

