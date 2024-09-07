import React, { ChangeEvent, FormEvent, useState } from "react";
import style from "./Contact.module.scss";
import Title from "../../ui/title/Title";
import Wrapper from "../../ui/wrapper/Wrapper";


const Contact: React.FC = () => {

  const [ email, setEmail ] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email)
    setEmail('')
  }

  return (
    <>
      <Wrapper>
        <section className={style.contactBlock}>
          <Title
            title="Lets Design Together"
            subTitle="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante."
          />
          <form className={style.inputBtnWrapper} onSubmit={handleSubmit}>
            <input
              className={style.input}
              placeholder="Enter Your Email"
              value={email}
              onChange={handleChange}
            ></input>
            <button className={style.button} type='submit'>Contact Me</button>
          </form>
        </section>
      </Wrapper>
    </>
  );
};

export default Contact;
