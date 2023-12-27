import React, { useRef, useState } from "react";
import s from "./Album.module.scss";
import { smail } from "../../data/hobbys_paint";

export default function Album({ arr }) {


    const [isMainPhoto, setIsMainPhoto] = useState(0);
    const quantity = arr.length;
    const arrow_img = smail.arrow;
    const handleCkickImage = (ind) => {
        setIsMainPhoto(ind);
    };

    //

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
        let left = Math.abs((leftPosition - 1000) / 100);
        if (quantity - left > 0) {
            setLeftPosition(leftPosition - 1000);
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
            -1 * (Math.floor(quantity / itemsPerPage) * 1000);

        if (leftPosition + 1000 > 0) {
            setLeftPosition(maxLeftPosition);
        } else {
            setLeftPosition(leftPosition + 1000);
        }
    };

    // class for button
    // const classNameButton = ()=>{
    //     if(leftPosition==0){
    //         return s.blinkin_right
    //     } else if(leftPosition )
    // }
    return (
        <div className={s.paint__teilImages}>
            {/* контейнер з маленькими картинками */}
            <div className={s.small_container}>
                <button
                    className={s.btn_left}
                    onClick={() => handleClickLeftMini()}
                >
                    {arr.length > 10 && <img src={arrow_img} alt="arrow" />}
                </button>
                <div
                    className={s.small_wrapper}
                >
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
                <button
                    className={s.btn_right}
                    onClick={() => handleClickRightMini()}
                >
                    {arr.length > 10 && <img src={arrow_img} alt="arrow" />}
                </button>
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
