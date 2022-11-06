import React, { FC, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from './SliderThemeMobile.module.scss'

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import { ISlider } from "../../../../types/slider.types";
import Button from "../../Button/Button";

const img = require('../../../../assets/img/react-poster.png')

interface SliderThemeMobileProps {
  sliders: ISlider[]
}

const SliderThemeMobile:FC<SliderThemeMobileProps> = ({sliders}) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiperCard}
      >
          {sliders.map((slider, idx) =>     
            <SwiperSlide key={idx}>
              <img className={styles.img} height={180} src={img} alt="Постер."/>
              <h2 className={styles.title}>#{idx + 1} {slider.titleTheme}</h2>
              <p className={styles.description}>{slider.descriptionTheme}</p>
              <Button className={styles.btn} color="Pink">Начать</Button>
          </SwiperSlide>)}
      </Swiper>
    </>
  );
}

export default SliderThemeMobile
