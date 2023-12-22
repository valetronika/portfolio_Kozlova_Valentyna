import s from "./Home.module.scss";
import React, { useEffect, useState } from "react";
import { personal_data } from "../../data/data";
import { useTranslation } from "react-i18next";
import { certificates } from "../../data/certificates_data";

import main_photo from "../../images/ich.jpg";
import Button from "../../components/Button/Button";
import download_img from "../../images/arrow-circle-down.svg";
export default function Home() {
    // //== при переході на сторінку перезляд з початку:
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  //= для перекладача
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const data = personal_data[lang];

  const greetingArrMess = data?.greeting;
  const about = personal_data[lang].aboutMe;
  const skills = personal_data[lang].skills.join(", ");

  // == СЕРТИФІКАТИ
  const dtz_1 = certificates[lang].dtz_zertif1;
  const dtz_2 = certificates[lang].dtz_zertif2;
  const empfehlung1 = certificates[lang].Empfehlungsschreiben1;
  const empfehlung2 = certificates[lang].Empfehlungsschreiben2;
  const certifikate = certificates[lang].certificate_img_entw;

  const [isBig, setIsBig] = useState({
    certifikate: false,
    empfehlung1: false,
    empfehlung2: false,
  });
  // при переході на сторінку перезляд з початку:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const openCloseCertificate = (imageKey) => {
    setIsBig((prevState) => ({
      ...prevState,
      [imageKey]: !prevState[imageKey],
    }));
  };

  //== full year
  let currencyYear = new Date().getFullYear();
  const myBirdthYear = parseInt(
    personal_data[lang].birthDate.match(/\d{4}/)[0]
  );
  const fullYear = currencyYear - myBirdthYear;

  return (
    <div className={s.container}>
      <div className={s.home}>
        <div>
          {greetingArrMess?.map((el) => {
            return (
              <h2 className={s.greeteng_message} key={el[1]}>
                {el}
              </h2>
            );
          })}
          <h2 className={s.greeteng_message}>{data.position}</h2>
        </div>
        <div
          className={s.home__main_photo}
          style={{ backgroundImage: `url(${main_photo})` }}
        ></div>
      </div>
      {/* ==== CONTAINER BUTTON */}
      <div className={s.home__button}>
        <Button
          className={"download_cv"}
          func={data.cv_link}
          download={"Kozlova Valentyna CV"}
          name={data.cv_text}
          imgClassName="download_img"
          imgSrc={download_img}
        />
      </div>

      {/* === ABOUT ME TIEL */}
      <div className={s.home_aboutme}>
        <div>
          <p>
            {" "}
            {about[2]} <span>{fullYear}</span>
            {about[3]}
          </p>
          <p>
            {" "}
            {about[4]}
            <span>{skills}</span>
          </p>
        </div>
        {/* <Pipboy /> */}
      </div>

      <img
        onClick={() => openCloseCertificate("certifikate")}
        className={
          isBig.certifikate
            ? `${s.container__certificate} ${s.container__certificate_big}`
            : `${s.container__certificate} ${s.container__certificate_small}`
        }
        src={certifikate}
        alt="certifikate developer"
      />
      <img
        onClick={() => openCloseCertificate("empfehlung1")}
        className={
          isBig.empfehlung1
            ? `${s.container__certificate} ${s.container__certificate_big}`
            : `${s.container__certificate} ${s.container__certificate_small}`
        }
        src={empfehlung1}
        alt="empfehlung1 developer"
      />
      <img
        onClick={() => openCloseCertificate("empfehlung2")}
        className={
          isBig.empfehlung2
            ? `${s.container__certificate} ${s.container__certificate_big}`
            : `${s.container__certificate} ${s.container__certificate_small}`
        }
        src={empfehlung2}
        alt="empfehlung2 developer"
      />
    </div>
  );
}
