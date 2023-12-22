import React, { useState } from "react";
import s from "./Pipboy.module.scss";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { useTranslation } from "react-i18next";
import { personal_data } from "../../data/data";

export default function Pipboy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const general = personal_data[lang];
  let currencyYear = new Date().getFullYear();
  const myBirdthYear = parseInt(
    personal_data[lang].birthDate.match(/\d{4}/)[0]
  );
  const fullYear = currencyYear - myBirdthYear;

  const [isShowName, setIsShowName] = useState(false);
  const [isShowCountry, setIsShowCountry] = useState(false);

  setTimeout(() => {
    setIsShowName(true);
  }, 1000);

  setTimeout(() => {
    setIsShowCountry(true);
  }, 3000);
  return (
    <div className={s.about__pip}>
      <table className={s.about__pip_table}>
        <thead>
          <tr>
            <th colSpan={2} className={s.column_inactive}>
              stat
            </th>
            <th colSpan={2} className={s.column_active}>
              data
            </th>
            <th colSpan={1} className={s.column_inactive}>
              proj
            </th>
            <th colSpan={2} className={s.column_inactive}>
              photo
            </th>
          </tr>
        </thead>
      </table>
      <div className={s.about__pip_down}>
        <div className={s.about__pip_info}>
          <p className={s.about__pip_typing}>
            name : <TypingAnimation text={general.name} />
          </p>
          <p>age: {fullYear}</p>
          <p>
            {" "}
            country:{" "}
            {isShowCountry ? (
              <TypingAnimation text={general.country} />
            ) : (
              <span className={s.about__pip_blink}></span>
            )}{" "}
          </p>
          {isShowCountry ? <span className={s.about__pip_blink}></span> : ""}
        </div>
        <img
          src="https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.gif"
          alt="pipboy"
          className={s.about__pip_img}
        />
      </div>
    </div>
  );
}
