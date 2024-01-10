import React, { useState } from "react";
import s from "./Modalmage.module.scss";

export default function Modalmage({ images, ind }) {

    const [index, setIndex] = useState(ind ?? 0);
    const [selectedImage, setSelectedImage] = useState(images[index]);

    const handleMainImagePrevClick = () => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setSelectedImage(images[newIndex]);
      };
      const handleMainImageNextClick = () => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
      };
    return (
        <div className={s.modal}>
            <div className={s.modal__container}>
                <button
                    className={`${s.modal__button} ${s.modal__button_left}`}
                    onClick={handleMainImagePrevClick}
                >
                    &lt;
                </button>
                <img
                    src={selectedImage}
                    alt="Selected Image"
                    className={s.modal__image}
                />
                <button
                    className={`${s.modal__button} ${s.modal__button_right}`}
                    onClick={handleMainImageNextClick}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
