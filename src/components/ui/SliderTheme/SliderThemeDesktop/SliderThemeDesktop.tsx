import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './SliderThemeDesktop.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Button from "../../Button/Button";
import { ISlider } from "../../../../types/slider.types";

const img = require('../../../../assets/img/react-poster.png')

interface SliderThemeDesktopProps {
  sliders: ISlider[]
}

const SliderThemeDesktop:FC<SliderThemeDesktopProps> = ({sliders}) => {

  return (
    <>
      <div className={styles.desktopContainer}>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction"
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
      </div>
      <div className={styles.tabletContainer}>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction"
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
      </div>
    </>
  );
}

export default SliderThemeDesktop;
