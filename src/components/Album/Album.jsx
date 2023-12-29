import React, { useEffect, useState } from "react";
import s from "./Album.module.scss";
// import { smail } from "../../data/hobbys_paint";
import { icons } from "../../data/animated_icons";

export default function Album({ arr }) {
    const animated_icons_arr = icons;

    const [isMainPhoto, setIsMainPhoto] = useState(0);
    const [widthSmallImg, setWidthSmallImg] = useState(50);
    const [widthContainer, setWidthContainer] = useState(500);
    const quantity = arr.length;
    const arrow_img = animated_icons_arr.arrow;
    console.log("Ширина экрана:", window.innerWidth);

    const handleCkickImage = (ind) => {
        setIsMainPhoto(ind);
    };

    const [leftPosition, setLeftPosition] = useState(0);
    const styleSmallImages = {
        left: leftPosition,
    };

    // = left buttons
    const handleClickLeft = () => {
        let index = +isMainPhoto - 1;
        if (index < 0) {
            index = arr.length - 1;
        }
        setIsMainPhoto(index);
    };
    const handleClickLeftMini = () => {
        let left = Math.abs((leftPosition - widthContainer) / widthSmallImg);
        if (quantity - left > 0) {
            setLeftPosition(leftPosition - widthContainer);
        } else {
            setLeftPosition(0);
        }
    };

    //= right buttons
    const handleClickRight = () => {
        let index = (+isMainPhoto + 1) % arr.length;
        setIsMainPhoto(index);
    };

    const handleClickRightMini = () => {
        const itemsPerPage = 10;
        const maxLeftPosition =
            -1 * (Math.floor(quantity / itemsPerPage) * widthContainer);

        if (leftPosition + widthContainer > 0) {
            setLeftPosition(maxLeftPosition);
        } else {
            setLeftPosition(leftPosition + widthContainer);
        }
    };

    // test
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Установка слушателя при монтировании компонента
        window.addEventListener("resize", handleResize);

        // Убираем слушателя при размонтировании компонента
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 
    console.log(windowWidth);



    return (
        <div className={s.paint__teilImages}>
            {/* контейнер з маленькими картинками */}
            <div className={s.small_container}>
                {arr.length > 10 && (
                    <button
                        className={s.btn_left}
                        onClick={() => handleClickLeftMini()}
                    >
                        {<img src={arrow_img} alt="arrow" />}
                    </button>
                )}
                <div className={s.small_wrapper}>
                    <div
                        style={styleSmallImages}
                        className={s.small_wrapper_all}
                    >
                        {arr.map((el, ind) => (
                            <img
                                onClick={() => handleCkickImage(ind)}
                                className={s.small_wrapper__img}
                                key={el + ind}
                                src={el}
                                alt="img photo"
                            />
                        ))}
                    </div>
                </div>
                {arr.length > 10 && (
                    <button
                        className={s.btn_right}
                        onClick={() => handleClickRightMini()}
                    >
                        {<img src={arrow_img} alt="arrow" />}
                    </button>
                )}
            </div>
            {/*  контейнер з вибраною картнкою */}
            <div className={s.paint__mainImage}>
                <button
                    onClick={() => handleClickLeft()}
                    className={s.paint__prewBtn}
                >{`<<`}</button>
                <div className={s.paint__mainImage_img}>
                    <img src={arr[isMainPhoto]} alt="photo" />
                </div>
                <button
                    onClick={() => handleClickRight()}
                    className={s.paint__nextBtn}
                >{`>>`}</button>
            </div>
        </div>
    );
}
