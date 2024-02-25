import React from "react";
import PropTypes from "prop-types";
import s from "./CarouselGrid.module.scss";
import CarouselModal from "./CarouselModal";

export default function CarouselGrid({ images }) {
    let indexImg = 0;

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [indexToOpen, setIndexToOpen] = React.useState(0);
    const thumbnailHandleClick = (index) => {
        setModalIsOpen(!modalIsOpen);
        setIndexToOpen(index);
        console.log(index);
    };
    return (
        <div className={s.carousel}>
            {images.map((image, index) => {
                indexImg++;
                return (
                    <div
                        className={s.carousel__item}
                        key={new Date().getTime() + indexImg}
                        onClick={() => {
                            thumbnailHandleClick(index);
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            className={s.carousel__thumbnail}
                        ></div>
                    </div>
                );
            })}
            {modalIsOpen && <CarouselModal images={images} index={indexToOpen} handleClose={() => setModalIsOpen(false)} />}
        </div>
    );
}

CarouselGrid.propTypes = {
    images: PropTypes.array,
};
