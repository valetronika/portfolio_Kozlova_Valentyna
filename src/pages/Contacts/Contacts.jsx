import { useTranslation } from "react-i18next";
import s from "./Contacts.module.scss";
import React, { useState } from "react";
import { personal_data, contacts_data } from "../../data/data";
import CopyToClipboard from "react-copy-to-clipboard";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
// import FormEmail from "../../components/FormEmail/FormEmail";

export default function Contacts() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const general = personal_data[lang];

  const email = contacts_data.email;
  const telegram = contacts_data.telegram;

  // clipboard

  const [isCopied, setIsCopied] = useState(false);

  const handleCopySuccess = () => {
    setIsCopied(true);

    // скидання статуса після декілька секунд
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className={s.contacts}>

        <p className={s.contacts__email}>
          {general.contacts.write_me_massage}
          <a title="Click to send E-mail" href={`mailto:${email}`}>
            {email}
          </a>
        </p>

      <CopyToClipboard text={telegram} onCopy={handleCopySuccess}>
        <p title="Click to copy to clipboard" style={{ cursor: "pointer" }}>
          Telegram: {telegram}
        </p>
      </CopyToClipboard>
      {isCopied && (
        <ModalMessage
          text="Text copied to clipboard!"
          onClose={() => setIsCopied(false)}
        />
      )}
    </div>
  );
}
