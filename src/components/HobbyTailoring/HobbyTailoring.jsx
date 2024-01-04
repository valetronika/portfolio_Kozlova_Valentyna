import React from 'react'
import s from './HobbyTailoring.module.scss';
import {tailor,icons} from '../../data/hobby_tailor'
import Carousel from '../Carousel/Carousel';
import { personal_data } from "../../data/data";
import { useTranslation } from 'react-i18next';


export default function HobbyTailoring() {
  const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const general = personal_data[lang];
    const hobbys =
    general?.hobbiesDifferent.tailor ||
    personal_data["en"].hobbiesDifferent.tailor;
  return (
    <div className={s.tailor}>
      <div className={`${s.tailor__title} text__title` }>
                <p className="text_about">
                    {hobbys.text1}.
                   <img src={icons.lol} alt="smile" />
                </p>
                <p className="text_about">
                {hobbys.text2}

                </p>
      </div>
            <Carousel images={tailor}/>
      
    </div>
  )
}
