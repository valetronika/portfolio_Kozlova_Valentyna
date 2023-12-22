import React from "react";
// import { useTranslation } from "react-i18next";

import { general_info } from "../../data/data";
import s from "./Phone.module.scss";

export default function Phone() {
  // const { t, i18n } = useTranslation();
  // const lang = i18n.language;
  const general = general_info.phone.phone_de;
  const whatsapp = general_info.phone.phone_ua
  const whatsappLink = `https://wa.me/${whatsapp}`;
  // console.log(general);

  return (
    <div className={s.contacts}>
      <a className={s.contacts__phone} href={`tel:${general}`}>
        {general}
      </a>
      <a className={s.contacts__whatsapp} href={whatsappLink}>WhatsApp</a>
    </div>
  );
}
