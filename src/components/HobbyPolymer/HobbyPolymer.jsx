import React, { useState } from "react";
import s from "./HobbyPolymer.module.scss";
import { polymer_data } from "../../data/hobby_polymer";
import { personal_data } from "../../data/data";
import Album from "../Album/Album";
import { useTranslation } from "react-i18next";

export default function HobbyPolymer() {

  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const general = personal_data[lang];
  const about = general?.aboutMe || personal_data["en"].aboutMe;
  console.log(about)

    // const plymer_arr = polymer_data;
    // const [isMainPhoto, setIsMainPhoto] = useState(0);
    // const handleCkickImage = (ind) => {
    //     setIsMainPhoto(ind);
    // };
    // const handleClickLeft = () => {
    //     let index = +isMainPhoto - 1;
    //     if (index < 0) {
    //         index = plymer_arr.length - 1;
    //         setIsMainPhoto(index);
    //     }
    //     setIsMainPhoto(index);
    // };
    // const handleClickRight = () => {
    //     let index = (+isMainPhoto + 1) % plymer_arr.length;
    //     setIsMainPhoto(index);
    // };
    return (
        <div className={s.polymer}>
            <div className={s.polymer__title}>

            </div>
            <Album arr={polymer_data} />

            <div className={s.polymer__mini}></div>
            <div className={s.polymer__big}></div>
        </div>
    );
}
