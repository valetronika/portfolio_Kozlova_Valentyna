import React from "react";
import { useTranslation } from "react-i18next";
import { personal_data } from "../data/data";

function Profile() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language; // Текущий язык приложения

    const data = personal_data[lang]; // Получаем данные для текущего языка

    if (!data) {
        return <div>Данные не найдены для текущего языка.</div>;
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.position}</p>
            <p>{data.education}</p>
            <p>{data.skills.join(", ")}</p>
            <p>{data.hobbies.join(", ")}</p>
            <p>{data.location}</p>
            <p>{data.birthDate}</p>
            <p>{data.graduationDate}</p>
            <p>{data.aboutMe}</p>
        </div>
    );
}

export default Profile;
