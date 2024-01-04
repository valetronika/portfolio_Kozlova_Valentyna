import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { personal_data } from "../../data/data";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import { Fade as Hamburger } from "hamburger-react";

export default function Header() {
  
  // toggle
  const [isOpen, setOpen] = useState(false);
  const classNameUlList = isOpen
    ? `${s.nav__ul} ${s.nav__ul_active}`
    : `${s.nav__ul}`;

  // для перекладача
  const { t, i18n } = useTranslation();
  // const lang = i18n.language;
  // так була помилка якщо браузер ставить сам мову
  const lang =
    i18n.language == "ru" ? "en" : i18n.language;
    console.log(' header',lang)


  const data = personal_data[lang];
  const [language, setLanguage] = useLocalStorage("language", "en");
  const handlerLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  if (!data) {
    return <div>Данные не найдены для текущего языка.</div>;
  }
  // active link
  const setActiveLink = ({ isActive }) => {
    return isActive ? `${s.nav__li} ${s.nav__li_active}` : `${s.nav__li} `;
  };
  const handleChangeToggle = () => {
    setOpen(false);
  };

  return (
    <div className={s.header}>
      {isOpen && (
        <div
          className={isOpen ? s.header__background : s.header__background_none}
          onClick={() => handleChangeToggle()}
        ></div>
      )}

      <NavLink to={"/"} className={s.header__logo}>
        VALENTYNA KOZLOVA
      </NavLink>
      <div className={s.nav__container}>
        <nav className={s.nav}>
          <ul className={classNameUlList}>
            <li>
              <NavLink
                to={"/"}
                className={setActiveLink}
                onClick={() => handleChangeToggle()}
              >
                {data.translation.home}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={setActiveLink}
                onClick={() => handleChangeToggle()}
              >
                {data.translation.about}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/works"}
                className={setActiveLink}
                onClick={() => handleChangeToggle()}
              >
                {data.translation.works}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contacts"}
                className={setActiveLink}
                onClick={() => handleChangeToggle()}
              >
                {data.translation.contacts}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.header__language}>
          <select
            value={language}
            onChange={(e) => handlerLanguageChange(e.target.value)}
            className={s.header__select}
          >
            <option value="en">{t("English")}</option>
            <option value="ukr">{t("Ukrainian")}</option>
            <option value="de">{t("German")}</option>
          </select>
        </div>
        <div className={s.toggle}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
}
