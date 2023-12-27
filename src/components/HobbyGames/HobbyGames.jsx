import React, { useState } from 'react'
import s from './HobbyGames.module.scss'
import {general_info, personal_data} from '../../data/data'
import { useTranslation } from 'react-i18next';
import { play_data } from "../../data/hobbys_play";

export default function HobbyGames() {

  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const general =
    personal_data[lang]?.hobbiesDifferent ||
    personal_data["en"].hobbiesDifferent;

    const animation= play_data.images
    console.log(animation)

  return (
    <div>
      <p className={s.hobbys_title}> <img className={s.hobbys_animation} src={animation.watter_gun} alt="watter_gun" />  <img className={s.hobbys_animation} src={animation.flying_sauer} alt="watter_gun" /> {general.game.title1}  :</p>
      <div className={s.hobbys__play} >
        {/* Fallout 4 */}
        <div className={s.hobbys__play_container1} >
          <h2 className={s.hobbys__play_text}>Fallout 4</h2>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXE1ZHlzc2xoZnk4a2g4cXZuMHR6aG9ydzgxbGdhMmNpem5sNGZvMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/humKLWskpBIScoGZgt/giphy.gif"
            alt=""
          />
        </div>
        {/*warcraft  */}
        <div className={s.hobbys__play_container2} >
        <h2 className={s.hobbys__play_text}>World of Warcraft</h2>

          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzRqZjIyMTY1dDJtbjkybWg5bmxvMjZrZ3dwcXdwYWFvd2dtbHlpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zjOOpgD3uF5OHg1Do/giphy.gif"
            alt=""
          />
        </div>

        {/*  Baldur's Gate 3 */}
        <div className={s.hobbys__play_container3}>
        <h2 className={s.hobbys__play_text}>Baldur's Gate 3</h2>

          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM252eXd4MjE0ZWxlZGplaXptNG5qeTI1eXltMGQ0MnhobmJzdnZxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VdWeTTKCneSQx90QgH/giphy.gif"
            alt=""
          />
        </div>

        {/* Witcher 3 */}
        <div className={s.hobbys__play_container4}>
        <h2 className={s.hobbys__play_text}>Witcher 3</h2>

          <img
            src="https://media.giphy.com/media/VIuE5d0sG2sxMRCO99/giphy.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
