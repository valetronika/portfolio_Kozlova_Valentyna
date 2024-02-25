import s from "./HobbysAlbum.module.scss";
import React from "react";
import HobbyGames from "../HobbyGames/HobbyGames";
import HobbyPaint from "../HobbyPaint/HobbyPaint";
import HobbyPolymer from "../HobbyPolymer/HobbyPolymer";
import HobbyTailoring from "../HobbyTailoring/HobbyTailoring";

export default function HobbysAlbum() {
    return (
        <div className={s.hobbys}>
            <HobbyPaint />
            <HobbyPolymer />
            <HobbyTailoring/>
            <HobbyGames />
        </div>
    );
}
