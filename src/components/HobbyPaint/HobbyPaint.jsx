import React, { useState } from "react";
import { personal_data } from "../../data/data";
import s from "./HobbyPaint.module.scss";
import { paint, smail } from "../../data/hobbys_paint";
import { useTranslation } from "react-i18next";
import Album from "../Album/Album";

export default function HobbyPaint() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const general =
        personal_data[lang]?.hobbiesDifferent ||
        personal_data["en"].hobbiesDifferent;

    // const paint_arr = paint;

    // const [isMainPhoto, setIsMainPhoto] = useState(0);

    // const handleCkickImage = (ind) => {
    //     setIsMainPhoto(ind);
    // };
    // const handleClickLeft = () => {
    //     let index = +isMainPhoto - 1;
    //     if (index < 0) {
    //         index = paint_arr.length - 1;
    //         setIsMainPhoto(index);
    //     }
    //     setIsMainPhoto(index);


    // };
    // const handleClickRight = () => {
    //     let index = (+isMainPhoto + 1) % paint_arr.length;
    //     setIsMainPhoto(index);
    //     // console.log(index)
    // };
    return (
        <div className={s.paint}>
            {/* контейнер з text */}

            <div className={s.paint__text}>
                {general.paint.title}{" "}
                <img
                    className={s.paint__span}
                    src={smail.sad_cat}
                    alt="sad_cat"
                />{" "}
                {general.paint.title2}
            </div>

            <div className={s.paint__title}>
                <img src={smail.paint_img} alt="paint icon" />{" "}
                {general.paint.title3} :
            </div>

            {/* контейнер з малюнками */}
            <div className={s.paint__teilImages}>

                <Album arr={paint} />
            </div>
        </div>
    );
}
