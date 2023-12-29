import s from "./Home.module.scss";
import React, { useEffect, useState } from "react";
import { personal_data } from "../../data/data";
import { useTranslation } from "react-i18next";
import { certificates } from "../../data/certificates_data";

import main_photo from "../../images/ich.jpg";
import Button from "../../components/Button/Button";
import download_img from "../../images/arrow-circle-down.svg";
import useLocalStorage from "../../hooks/use-localstorage";
export default function Home() {
  //= для перекладача


  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");
  // const lang = i18n.language;
  console.log('i18n.language',i18n.language,typeof i18n.language)
  // const lang =
  // i18n.language == "ru" ? "en" : i18n.language;
  const lang =
   i18n.language == "ukr" || i18n.language == "de" || i18n.language == "en" ?  i18n.language: "en" ;
  const data = personal_data[lang];

  // при переході на сторінку перезляд з початку:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //== full year
  let currencyYear = new Date().getFullYear();
  const myBirdthYear = parseInt(
    personal_data[lang]?.birthDate?.match(/\d{4}/)[0]
  );
  const fullYear = currencyYear - myBirdthYear;

  const greetingArrMess = data.greeting;
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
  const openCloseCertificate = (imageKey) => {
    setIsBig((prevState) => ({
      certifikate: imageKey === "certifikate" ? !prevState.certifikate : false,
      empfehlung1: imageKey === "empfehlung1" ? !prevState.empfehlung1 : false,
      empfehlung2: imageKey === "empfehlung2" ? !prevState.empfehlung2 : false,
    }));
  };
  if (!data) {
    // Обробка відсутності даних для выбраної мови
    console.error(`Дані мови ${lang} відсутні.`);
    return <div>Даніе відсутні</div>;
  }
  // console.log('window.innerWidth', window.innerWidth)


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
          <h2 className={s.greeteng_message}>{data?.position}</h2>
        </div>
        <div
          className={s.home__main_photo}
          style={{ backgroundImage: `url(${main_photo})` }}
        ></div>
      </div>
      {/* ==== CONTAINER BUTTON */}
      <div className={s.home__button}>
        {data && (
          <Button
            className={"download_cv"}
            func={data.cv_link}
            download={"Kozlova Valentyna CV"}
            name={data.cv_text}
            imgClassName="download_img"
            imgSrc={download_img}
          />
        )}
      </div>

      {/* === ABOUT ME TEIL */}
      <div className={s.home_aboutme}>
        {about && (
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
        )}
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
