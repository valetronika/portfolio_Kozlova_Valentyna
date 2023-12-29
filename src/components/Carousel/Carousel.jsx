import React, { useState } from "react";
import s from "./Carousel.module.scss";

const Carousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleThumbnails = 6;

  const handleThumbnailClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - visibleThumbnails;
      return newIndex < 0 ? images.length - visibleThumbnails : newIndex;
    });
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + visibleThumbnails) % images.length
    );
  };

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
    <div className={s.carousel_container}>
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
                onClick={() => handleThumbnailClick(startIndex + index)}
              />
            ))}
        </div>
        <button className={s.arrow_button} onClick={handleNextClick}>
          &gt;
        </button>
      </div>
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
