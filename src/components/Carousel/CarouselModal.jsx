import React from "react";
import s from "./CarouselModal.module.scss";
import { icons } from "../../data/icons";

export default function CarouselModal({ images, handleClose, index }) {
    const [currentIndex, setCurrentIndex] = React.useState(index);

    const handleNext = () => {
        let newIndex = currentIndex
        setCurrentIndex(++newIndex % images.length);
    };
    const handlePrev = () => {
        let newIndex = currentIndex
        setCurrentIndex(--newIndex >= 0 ? newIndex : images.length - 1);
    };

    const handleCloseModal = (e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };
    /** next or prev image on keydown */
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft') {
            handlePrev();
        }
    };
    console.log("CarouselModal will mount with index: ", index);
    return (
        <div className={s.modal} onClick={(e) => handleCloseModal(e)} onKeyDown={handleKeyDown}>
            <div className={s.modal__container} role="dialog" aria-modal="true" >
                <button className={`${s.nav} ${s.nav__prev}`} onClick={handlePrev}>
                    
                    <img src={icons.arrow_big} alt="arrow left" />
                </button>
                <div className={s.modal__item}>
                    <img src={images[currentIndex]} alt="thumbnail" />
                    <div className={s.modal__span} onClick={handleClose}>
                        <span></span>
                    </div>
                </div>
                <button className={`${s.nav} ${s.nav__next}`} onClick={handleNext}>
                    <img src={icons.arrow_big} alt="arrow right" />
                </button>
            </div>
        </div>
    );
}
