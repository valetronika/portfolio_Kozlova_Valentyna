import React, { useState } from 'react'
import s from './FormEmail.module.scss';
import { general_info } from "../../data/data";


export default function FormEmail() {
  // const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const recipient = general_info?.email;


  const handleSubmit = (event) => {
    event.preventDefault();

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>


      <div className={s.form__subject}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

      <div className={s.form__message}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit" className={s.form__submit}>Send Email</button>
    </form>
  );
}
