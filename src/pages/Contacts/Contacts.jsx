import { useTranslation } from "react-i18next";
import s from "./Contacts.module.scss";
import React, { useState } from "react";
import { personal_data, contacts_data } from "../../data/data";
import CopyToClipboard from "react-copy-to-clipboard";
// import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Phone from "../../components/Phone/Phone";

export default function Contacts() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const general = personal_data[lang];
  
  const email = contacts_data.email;
  // const about = general?.aboutMe || personal_data["en"].aboutMe;
  const telegram = contacts_data.telegram;

  // clipboard

  const [isCopied, setIsCopied] = useState(false);

  const handleCopySuccess = () => {
    setIsCopied(true);

    // resetting the status after a few seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className={s.contacts}>
      <p className={s.contacts__email}>
        {general?.contacts.write_me_massage}
        <a title="Click to send E-mail" href={`mailto:${email}`}>
          {email}
        </a>
      </p>

      <CopyToClipboard text={telegram} onCopy={handleCopySuccess}>
        {/* <div> */}
          <div title="Click to copy to clipboard" style={{ cursor: "pointer" }}  className={s.contacts__telegram}>
            <span style={{ color: "#0088CC" }}>Telegram:</span>{!isCopied ? telegram:<p  className={s.contacts__telegram_cop} onClose={() => setIsCopied(false)}> Copied !</p>}
          </div>
            {/* {isCopied && (
              <ModalMessage text="Copied !" onClose={() => setIsCopied(false)} />
            )} */}
        {/* </div> */}

      </CopyToClipboard>
      <Phone />


    </div>
  );
}
