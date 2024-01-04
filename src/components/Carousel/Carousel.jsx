import React, { useState } from "react";
import s from "./Carousel.module.scss";
import Modalmage from "../Modalmage/Modalmage";
import { icons } from "../../data/animated_icons";

const Carousel = ({ images }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [startIndex, setStartIndex] = useState(0);
    const visibleThumbnails = 6;

    const handleThumbnailClick = (index) => {
        setSelectedImage(images[index]);
    };

    const handlePrevClick = () => {
        // const images = [...images];
        setStartIndex((prevIndex) => {
            // const newIndex = prevIndex - visibleThumbnails;
            const newIndex =
                (startIndex - visibleThumbnails + images.length) %
                images.length;
            return newIndex < 0 ? images.length - visibleThumbnails : newIndex;
        });
    };

    const handleNextClick = () => {
        setStartIndex(
            (prevIndex) => (prevIndex + visibleThumbnails) % images.length
        );
    };

    const handleMainImagePrevClick = () => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setSelectedImage(images[newIndex]);
    };

    const handleMainImageNextClick = () => {
        const currentIndex = images.indexOf(selectedImage);
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
    };

    //= модал
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const handleClickOpenModal = (e) => {
        setIsShowModal(!isShowModal);
        const newCurrentIndex = images.indexOf(selectedImage);
        setCurrentIndex(newCurrentIndex);
        // console.log(`Index of selected image: ${currentIndex}`);
    };
    const handleClickCloseModal = (e) => {
        // e.stopPropagation()
        // setIsShowModal(!isShowModal)
        if (
            e.target.classList.contains(s.modal_images) ||
            e.target.classList.contains(s.modal_images_child)||
            e.target.classList.contains(s.modal_images_close) 
            
        ) {
            setIsShowModal(false);
        }
    };
    return (
        <div className={s.carousel_container}>
            {isShowModal && (
                <div
                    onClick={(e) => handleClickCloseModal(e)}
                    className={s.modal_images}
                >
                    <div
                        onClick={(e) => handleClickCloseModal(e)}
                        className={s.modal_images_close}
                    >
                        <p
                            // onClick={(e) => handleClickCloseModal(e)}
                            className={s.modal_images_child}
                        >
                            close   {"   "} X
                        </p>{" "}
                        {/* <img
                            // onClick={(e) => handleClickCloseModal(e)}
                            src={icons.wach}
                            alt="icon cat"
                            className={s.modal_images_child}
                        /> */}
                    </div>
                    <div className={s.modal_images_wrapper}>
                        <Modalmage images={images} ind={currentIndex} />
                    </div>
                </div>
            )}
            {/* ========== small images*/}
            <div className={s.thumbnails_container}>
                <button className={s.arrow_button} onClick={handlePrevClick}>
                    &lt;
                </button>
                <div className={s.thumbnails_wrapper}>
                    {images
                        .slice(startIndex, startIndex + visibleThumbnails)
                        .map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`${s.thumbnail} ${
                                    image === selectedImage ? s.selected : ""
                                }`}
                                onClick={() =>
                                    handleThumbnailClick(startIndex + index)
                                }
                            />
                        ))}
                </div>
                <button className={s.arrow_button} onClick={handleNextClick}>
                    &gt;
                </button>
            </div>
            {/* ==========main image */}
            <div className={s.main_image_container}>
                <button
                    className={`${s.arrow_button} ${s.main_arrow_button}`}
                    onClick={handleMainImagePrevClick}
                >
                    &lt;
                </button>
                <img
                    src={selectedImage}
                    alt="Selected Image"
                    className={s.main_image}
                    onClick={(e) => handleClickOpenModal(e)}
                />
                <button
                    className={`${s.arrow_button} ${s.main_arrow_button}`}
                    onClick={handleMainImageNextClick}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
