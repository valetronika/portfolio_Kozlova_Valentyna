import React from "react";
import s from "./Button.module.scss";
import { Link } from "react-router-dom";

export default function Button({ name, func, className, download,imgClassName,imgSrc }) {
  return (
    <div>
      {className === "view__result" && (
        <a href={func} target="_blank" className={s[className]} rel="noopener noreferrer">
          {name}
        </a>
      )}
      {className === "read__more" && (
        <Link to={func}><button
          className={s[className]}>{name}</button></Link>
      )}
      {className === "download_cv" && (
        <a download={download} href={func} className={s[className]} rel="noopener noreferrer">
          {name}
        {imgClassName&& <img className={imgClassName} src={imgSrc} alt="icon download cv"/>}
        </a>
      )}
    </div>
  );
}
