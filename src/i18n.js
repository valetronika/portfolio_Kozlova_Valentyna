import de from "./trans/de.json";
import en from "./trans/en.json";
import ukr from "./trans/ukr.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import enTranslation from "./locales/en/my-app.json"; // Подключите нужный файл перевода
const resources = {
    en: {
        translation: en,
    },
    ukr: {
        translation: ukr,
    },
    de: {
        translation: de,
    },
}
i18n
.use(initReactI18next)
.init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:'ru'
})

export default i18n;
