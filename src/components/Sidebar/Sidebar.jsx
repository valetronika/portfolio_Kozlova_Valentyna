import React, { useState } from "react";
import s from "./Sidebar.module.scss";
import { icons } from "../../data/data";

export default function Sidebar() {
    const [hoveredIcons, setHoveredIcons] = useState({});
    const onMouseEnter = (name) => {
        setHoveredIcons((prevState) => ({
            ...prevState,
            [name]: true,
        }));
    };

    const onMouseLeave = (name) => {
        setHoveredIcons((prevState) => ({
            ...prevState,
            [name]: false,
        }));
    };
    return (
        <div className={s.sidebar}>
            {icons.map((media) => {
                return (
                    <a
                        key={media.name}
                        href={media.url}
                        onMouseEnter={() => onMouseEnter(media.name)}
                        onMouseLeave={() => onMouseLeave(media.name)}
                        target="_blank"
                    >
                        <img
                            alt={media.name}
                            className={
                                hoveredIcons[media.name]
                                    ? `${s.sidebar__icon} ${s.sidebar__hovered}`
                                    : `${s.sidebar__icon}`
                            }
                            src={
                                hoveredIcons[media.name]
                                    ? media.icon2
                                    : media.icon1
                            }
                        />
                    </a>
                );
            })}

        </div>
    );
}
