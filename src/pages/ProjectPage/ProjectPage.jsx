import React, { useEffect, useState } from "react";
import s from "./ProjectPage.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { projects_data } from "../../data/projects_data";
import Circles from "../../components/animations/Circles/Circles";

export default function ProjectPage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const data = projects_data[lang];
  // спочатку було так const project = data?.find((project) => project?.general_info.id == id);
  const project = data?.find((project) => project?.general_info.id == id) ||projects_data["en"].find((project) => project?.general_info.id == id) ;
  // animation
  const [isJumping, setIsJumping] = useState(true);
  // перевірка
  const [isMounted, setIsMounted] = useState(true);
  const typeIsJumping = project?.general_info.is_jumping_image;
  useEffect(() => {
    setIsMounted(true);
    if (typeIsJumping) {
      const intervalId = setInterval(() => {
        if (isMounted) {
          setIsJumping((prevIsJumping) => !prevIsJumping);
        }
      }, 4000);

      return () => {
        clearInterval(intervalId);
        setIsMounted(false);
      };
    }
  }, [isJumping]);

  
// шаг назад
const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };


  return (
    <div className={s.project}>
      <button onClick={handleBackClick} className={s.project__step_back}>{` << back`}</button>
      <div className={s.project__head}>
        <h2 className={s.project__head}>Web Development</h2>
        
        <Circles />
      </div>
      <div
        className={
          typeIsJumping
            ? s.project__title
            : ` ${s.project__title} ${s.project__title_static}`
        }
      >
        <div
          className={
            typeIsJumping
              ? s.project__title_container
              : s.project__title_container_static
          }
        >
          {/*============== jumping img */}
          <img
            className={
              typeIsJumping & isJumping
                ? s.project__title_img_jumping
                : s.project__title_img
            }
            src={project?.general_info.image}
            alt="projecct icon"
          />
        </div>
        {/*============== Main title */}
        <h1 className={s.project__title_text}>{project.title}</h1>
      </div>
      {/*============= comment  */}
      {project.technical_specification.requirements.map((el) => (
        <p key={el} className={s.project__description_comment}>
          {el}
        </p>
      ))}
      {/*  */}
      <div className={s.project__specification}>
        <h3 className={s.project__background_hell}>{project.technical_specification.title}</h3>
        <ul className={s.project__background_hell}>
          {project.technical_specification.technical_task.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      {/* блок зі стаком  */}
      <div className={s.project__specification}>
        <h3>stack:</h3>
        <div className={s.project__stack}>
          <ul className={s.project__background_hell}>
            {project.general_info.stack.map((el) => (
              <li   key={el}>{`  ${el}   `}</li>
            
            ))}
          </ul>
        </div>
      </div>
      {/*============ block problem & solution */}
      {project.technical_specification?.problems &&
      project.technical_specification.problems.length > 0
        ? project.technical_specification?.problems?.map((el) => (
            <div
              className={s.problem}
              key={el.problem_title + project?.general_info.id}
            >
              {/* {console.log(el.problem_title + project.general_info.id)} */}
              <div className={s.problem__problem}>
                <h3 className={s.problem__title}>{el.problem_title} </h3>
                <p className={s.problem__text}>{el.problem}</p>
              </div>

              <div className={s.problem__solution}>
                <h3 className={s.problem__title}>{el.solution_title} </h3>
                <p className={s.problem__text}>{el.solution}</p>
              </div>
            </div>
          ))
        : ""}
      {/* ============  блок з описом проєкту */}
      {project.description
        ? project.description.map((el) => (
            <div className={s.project__description}>
              {el.img ? (
                <img
                  src={el.img}
                  className={s.project__description_img}
                  alt="example for description"
                />
              ) : (
                ""
              )}
              <p className={s.project__description_text}>{el.text}</p>
            </div>
          ))
        : ""}

      <div className={s.project__links}>
        {/* перевіряю чи є у базі  link_maket: якщо "none" то нічого не рендериться */}
       {project?.general_info.link_maket !== 'none' &&  <a
          className={s.project__links_cont}
          href={project?.general_info.link_maket}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={s.project__links_title}>layout</p>
          <img
            className={s.project__links_img}
            src={project.general_info.layout_img}
            alt="layout"
          />
        </a>}
        {/* перевіряю чи є у базі  link_web: якщо "none" то нічого не рендериться */}

        {project?.general_info.link_web !== "none" && <a
          className={s.project__links_cont}
          href={project.general_info.link_web}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={s.project__links_title}>presentation</p>

          <img
            className={s.project__links_img}
            src={project.general_info.website_from_layout_img}
            alt="layout"
          />
        </a>}
        <a
          className={s.project__links_cont}
          href={project.general_info.link_git}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={s.project__links_title}>github</p>

          <img
            className={s.project__links_img}
            src={project.general_info.git_hub_img}
            alt="layout"
          />
        </a>
      </div>
    </div>
  );
}
