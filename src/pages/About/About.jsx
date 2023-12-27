import s from "./About.module.scss";
import React, { useEffect, useState } from "react";
import { personal_data } from "../../data/data";
import main_photo from "../../images/my_photo.jpg";
import { useTranslation } from "react-i18next";
import Pipboy from "../../components/Pipboy/Pipboy";
import Circles from "../../components/animations/Circles/Circles";
import { useNavigate } from "react-router-dom";
import HobbysAlbum from "../../components/HobbysAlbum/HobbysAlbum";

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const general = personal_data[lang];

  // const about = personal_data[lang].aboutMe;
  const about = general?.aboutMe || personal_data["en"].aboutMe;
  // console.log("about", about);

  // //== при переході на сторінку перезляд з початку:

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/about");
    window.scrollTo(0, 0);
    // console.log(" window.scrollTo(0, 0);", window);
  }, [navigate]);

  //== skills to string
  // const skills = personal_data[lang].skills.join(", ");
  const skills = (
    personal_data[lang]?.skills || personal_data["en"].skills
  ).join(", ");

  //== hobbies to string
  // const hobbies = personal_data[lang].hobbies.join(", ");
  const hobbies = (
    personal_data[lang]?.hobbies || personal_data["en"].hobbies
  ).join(", ");

  //== full year
  let currencyYear = new Date().getFullYear();
  const myBirdthYear = parseInt(
    personal_data[lang]?.birthDate.match(/\d{4}/)[0]
  );
  const fullYear = currencyYear - myBirdthYear;

  // ======поява піпбою
  const [isActivePip, setIsActivePip] = useState(false);

  const classNamePip = isActivePip
    ? s.about__pip_container
    : s.about__pip_container_inactive;

  const classNameContainer = isActivePip
    ? s.about__main_photo_container
    : ` ${s.about__main_photo_container} ${s.about__main_photo_container_inactive}`;

  useEffect(() => {
    setTimeout(() => {
      setIsActivePip(true);
    }, 500);
  }, []);
  // -------
  return (
    <div className={s.about}>
      {/* ===========main photo */}
      <div className={classNameContainer}>
        <div
          onClick={() => setIsActivePip(!isActivePip)}
          className={s.main_photo}
          style={{ backgroundImage: `url(${main_photo})` }}
        ></div>

        <div className={classNamePip}>
          <div className={s.about_circles_container}>
            <Circles className={"circle_about_me"} />
          </div>

          <Pipboy />
        </div>
      </div>

      {/* ================text */}
      {about && (
        <div className={s.about__text}>
          <p> {about[0]}</p>
          <p> {about[1]}</p>

          <p>
            {" "}
            {/*  */}
            {about[2]} <span>{fullYear}</span>
            {about[3]}
          </p>

          <p>
            {" "}
            {about[5]}
            <span>{hobbies}</span>
          </p>
          <div className={s.about__hobbys}>
            <HobbysAlbum />
          </div>

          <div></div>

          <p className={s.about__text_marg}>
            {" "}
            {about[4]}
            <span>{skills}</span>
          </p>

          <p> {about[6]}</p>
        </div>
      )}
    </div>
  );
}
