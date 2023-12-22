import React from 'react'
import s from './ModalMessage.module.scss';
import PropTypes from "prop-types";


export default function ModalMessage({ text, onClose }) {
  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={onClose}>&times;</span>
        <p>{text}</p>
      </div>
    </div>
  );
}

ModalMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}
