import { useTranslation } from "react-i18next";
import s from "./Works.module.scss";
import React, { useEffect, useState } from "react";
import { projects_data } from "../../data/projects_data";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

export default function Works() {
  const { t, i18n } = useTranslation();
  // const lang = i18n.language;
  const lang =
   i18n.language === "ukr" || i18n.language === "de" || i18n.language === "en" ?  i18n.language: "en" ;
  const works = projects_data[lang];

  //== при переході на сторінку перезляд з початку:
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Функція, яка буде викликатись при зміні розміру екрану
    function handleResize() {
      setIsMobile(window.innerWidth <= 1025);
    }

    // початкове значення
    setIsMobile(window.innerWidth <= 1025);

    // Додавання події resize
    window.addEventListener("resize", handleResize);

    // Прибирання події під час видалення компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerClassName = isMobile ? `${s.works} ${s.mobile}` : s.works;
  return (
    <div className={containerClassName}>
      {works
        ?.filter((el) => el.general_info.isShow)
        .map((el) => (
          <ProjectItem
            element={el}
            className={"project"}
            key={`${el.general_info.id}`}
          />
        ))}
    </div>
  );
}
