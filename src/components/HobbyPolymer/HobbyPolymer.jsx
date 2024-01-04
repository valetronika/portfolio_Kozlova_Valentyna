import React from "react";
import s from "./HobbyPolymer.module.scss";
import { polymer_data } from "../../data/hobby_polymer";
import { personal_data } from "../../data/data";
// import Album from "../Album/Album";
import { useTranslation } from "react-i18next";
import { icons } from "../../data/animated_icons";
import Carousel from "../Carousel/Carousel";

export default function HobbyPolymer() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const general = personal_data[lang];
    const hobbys =
        general?.hobbiesDifferent.polymer ||
        personal_data["en"].hobbiesDifferent.polymer;
    const animated_icons_arr = icons;

    return (
        <div className={s.polymer}>
            <div className={`${s.polymer__title} text__title` }>
                <p className="text_about">
                    {hobbys.text1}
                   
                </p>
                <img
                        src={animated_icons_arr.lamp}
                        style={{ width: "50px", height:"50px",backgroundColor:'transparent' }}
                        alt="lamp"
                    />
            </div>
            {/* <Album arr={polymer_data} /> */}
            <Carousel images={polymer_data}/>

            {/* <div className={s.polymer__mini}></div>
            <div className={s.polymer__big}></div> */}
        </div>
    );
}
