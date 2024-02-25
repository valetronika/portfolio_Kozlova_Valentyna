import React from "react";
import s from "./HobbyPolymer.module.scss";
import { polymer_data } from "../../data/hobby_polymer";
import { personal_data } from "../../data/data";
import { useTranslation } from "react-i18next";
import { icons } from "../../data/animated_icons";
import CarouselGrid from "../Carousel/CarouselGrid";

export default function HobbyPolymer() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const general = personal_data[lang];
    const hobbies =
        general?.hobbiesDifferent.polymer ||
        personal_data["en"].hobbiesDifferent.polymer;
    const animated_icons_arr = icons;

    return (
        <div className={s.polymer}>
            <div className={`${s.polymer__title} text__title`}>
                <p className="text_about">{hobbies.text1}</p>
                <img
                    src={animated_icons_arr.lamp}
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "transparent",
                    }}
                    alt="lamp"
                />
            </div>
            <div className={s.polymer__pathImages}>
                <CarouselGrid images={polymer_data} />
            </div>
        </div>
    );
}
