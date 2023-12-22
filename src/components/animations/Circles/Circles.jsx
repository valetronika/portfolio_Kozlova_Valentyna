import React from "react";
import s from "./Circles.module.scss";

export default function Circles({className}) {

    const classCircle = className ? className : 'circle'
    return (

            <div className={s.container}>
                <div className={s[classCircle]}></div>
                <div className={s[classCircle]}></div>
                <div className={s[classCircle]}></div>
            </div>

    );
}
