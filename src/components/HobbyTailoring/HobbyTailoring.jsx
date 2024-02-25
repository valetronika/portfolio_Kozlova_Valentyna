import React from 'react'
import s from './HobbyTailoring.module.scss';
import {tailor,icons} from '../../data/hobby_tailor'
import { personal_data } from "../../data/data";
import { useTranslation } from 'react-i18next';
import CarouselGrid from '../Carousel/CarouselGrid';


export default function HobbyTailoring() {
  const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const general = personal_data[lang];
    const hobbies =
    general?.hobbiesDifferent.tailor ||
    personal_data["en"].hobbiesDifferent.tailor;
  return (
    <div className={s.tailor}>
      <div className={`${s.tailor__title} text__title` }>
                <p className="text_about">
                    {hobbies.text1}.
                    <img src={icons.lol} alt="smile" />
                </p>
                <p className="text_about">
                {hobbies.text2}

                </p>
      </div>
      <div className={s.tailor__pathImages}>
        <CarouselGrid images={tailor}/>
      </div>

      
    </div>
  )
}
