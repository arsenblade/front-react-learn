import React, { FC, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from './SliderThemeMobile.module.scss'

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Button from "../../Button/Button";
import { ITopic } from "../../../../types/topic.types";
import { Link, useNavigate } from "react-router-dom";

interface SliderThemeMobileProps {
  sliders: ITopic[]
}

const SliderThemeMobile:FC<SliderThemeMobileProps> = ({sliders}) => {
  const navigate = useNavigate()

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiperCard}
      >
          {sliders.map((slider, idx) =>     
            <SwiperSlide key={slider.id}>
              <img className={styles.img} height={180} src={require('../../../../assets/img/react-poster.png')} alt="Постер."/>
              <h2 className={styles.title}>#{idx + 1} {slider.titleTopic}</h2>
              <p className={styles.description}>{slider.descriptionTopic}</p>
              <Link className={styles.btnContainer} to={slider.id}><Button className={styles.btn} color="Pink">Начать</Button></Link>
          </SwiperSlide>)}
      </Swiper>
    </>
  );
}

export default SliderThemeMobile
