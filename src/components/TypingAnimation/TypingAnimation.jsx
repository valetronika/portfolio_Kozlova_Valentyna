import React, { useState, useEffect } from "react";
import s from "./TypingAnimation.module.scss";

const TypingAnimation = ({ text }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textLength = text.length;
    if (index < textLength) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  // console.log(index);
  // const colorLetterClass = index == text.length

  return (
    <span className={s.typing_container}>
      {text.split("").map((el, ind) => (
        <span key={el + ind} className={ind <= index ? s.green : s.dark}>
          {el}
        </span>
      ))}
    </span>
  );
};

export default TypingAnimation;
