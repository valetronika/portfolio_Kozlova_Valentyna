import React from "react";
import s from "./Button.module.scss";

export default function Button({ name, func, className, download,imgClassName,imgSrc }) {
  return (
    <div>
      {className === "view__result" && (
        <a href={func} target="_blank" className={s[className]}>
          {name}
        </a>
      )}
      {className === "read__more" && (
        <button className={s[className]}>{name}</button>
      )}
      {className === "download_cv" && (
        <a download={download} href={func} className={s[className]}>
          {name}
        {imgClassName&& <img className={imgClassName} src={imgSrc}/>}
        </a>
      )}
    </div>
  );
}
