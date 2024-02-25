import React, { useState } from "react";
import { personal_data } from "../../data/data";
import s from "./HobbyPaint.module.scss";
import { paint } from "../../data/hobbys_paint";
import { useTranslation } from "react-i18next";
import {icons} from '../../data/animated_icons'
import CarouselGrid from "../Carousel/CarouselGrid";


export default function HobbyPaint() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const general =
        personal_data[lang]?.hobbiesDifferent ||
        personal_data["en"].hobbiesDifferent;
    const animated_icons_arr = icons;


    return (
        <div className={s.paint}>
            {/* container з text */}

            <div 
            className="text_about"
            >
                {general.paint.title}{" "}
                <img
                    className={s.paint__span}
                    src={animated_icons_arr.sad_cat}
                    alt="sad_cat"
                />{" "}
                {general.paint.title2}
            </div>

            <div 
            className={`${s.paint__title} text__title`}
            >
                {general.paint.title3} :
            </div>

            {/* container w images */}
            <div className={s.paint__pathImages}>
                <CarouselGrid images={paint}/>
            </div>
        </div>
    );
}
