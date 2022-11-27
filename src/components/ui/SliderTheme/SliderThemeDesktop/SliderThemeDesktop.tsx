import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './SliderThemeDesktop.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Button from "../../Button/Button";
import { ITopic } from "../../../../types/topic.types";
import { Link } from "react-router-dom";

interface SliderThemeDesktopProps {
  sliders: ITopic[]
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
            <SwiperSlide key={slider.id}>
              <img className={styles.img} src={require('../../../../assets/img/react-poster.png')} alt="Постер."/>
              <h2 className={styles.title}>#{idx + 1} {slider.titleTopic}</h2>
              <p className={styles.description}>{slider.descriptionTopic}</p>
              <Link className={styles.btnContainer} to={slider.id}><Button className={styles.btn} color="Pink">Начать</Button></Link>
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
            <SwiperSlide key={slider.id}>
              <img className={styles.img} src={require('../../../../assets/img/react-poster.png')} alt="Постер."/>
              <h2 className={styles.title}>#{idx + 1} {slider.titleTopic}</h2>
              <p className={styles.description}>{slider.descriptionTopic}</p>
              <Link className={styles.btnContainer} to={slider.id}><Button className={styles.btn} color="Pink">Начать</Button></Link>
            </SwiperSlide>)}
        </Swiper>
      </div>
      <div className={styles.mobileContainer}>
        <Swiper
          slidesPerView={1}
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
            <SwiperSlide key={slider.id}>
              <img className={styles.img} src={require('../../../../assets/img/react-poster.png')} alt="Постер."/>
              <h2 className={styles.title}>#{idx + 1} {slider.titleTopic}</h2>
              <p className={styles.description}>{slider.descriptionTopic}</p>
              <Link className={styles.btnContainer} to={slider.id}><Button className={styles.btn} color="Pink">Начать</Button></Link>
          </SwiperSlide>)}
        </Swiper>
      </div>
    </>
  );
}

export default SliderThemeDesktop;
