import React, { useEffect, useState } from "react";
import s from "./ProjectItem.module.scss";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

export default function ProjectItem({ element, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    
    //2 Функція, яка буде викликатись при зміні розміру екрану
    function handleResize() {
      setIsMobile(window.innerWidth <= 1025);
    }

    //2 початкове значення
    setIsMobile(window.innerWidth <= 1025);

    //2 Додавання події resize
    window.addEventListener("resize", handleResize);

    //2 Прибирання події під час видалення компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log('window.innerWidth', window.innerWidth)

  //2 для перехіду на сторінку
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/demo/${element.general_info.id}`);
  };

  /**
   * для зміни розміру блоку при наведенні
   */
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const web_prew = element.general_info?.link_web;

  // клас для усього контейнеру
  const containerClassName = isMobile
    ? s.mobile
    : isHovered
    ? `${s[className]} ${s.hovered}`
    : s[className];
    // const containerClassName =  isHovered
    // ? `${s[className]} ${s.hovered}`
    // : s[className];

  return (
    <div
      className={containerClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() =>isMobile? handleButtonClick():''}
    >
      <img
        src={element.general_info?.website_from_layout_img}
        alt="prev website img"
        className={s.image}
        onClick={() => handleButtonClick()}
      />
      <div className={s.info}>
        <div className={s.title}>{element.title}</div>

        {/* =============BUTTONS CONTAINER */}
        {(isHovered && !isMobile ) && (
          <div className={s.info__buttons_container}>
            {isMobile ? (
              ""
            ) : (
              <Button
                name={element.buttons.result_demo}
                className="view__result"
                func={web_prew}
              />
            )}
            <Link to={`/demo/${element.general_info.id}`}>
              <Button name={element.buttons.read_more} className="read__more" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
