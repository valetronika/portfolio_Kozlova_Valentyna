import s from "./HobbysAlbum.module.scss";
import React from "react";
import { polymer } from "../../data/hobbys_paint";
import HobbyGames from "../HobbyGames/HobbyGames";
import HobbyPaint from "../HobbyPaint/HobbyPaint";
import HobbyPolymer from "../HobbyPolymer/HobbyPolymer";
export default function HobbysAlbum() {
//   const photos = polymer[0];

  //   console.log(polymer);
  return (
    <div className={s.hobbys}>
        {/* <img className={s.hobbys_img} src={photos} alt="" /> */}

      <HobbyGames/>
      <HobbyPaint/>
      <HobbyPolymer/>
    </div>
  );
}
