import { FC , useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './SliderTheme.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {motion} from 'framer-motion'
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import cn from 'classnames'
import { ITopic } from "../../../types/topic.types";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { MyToast } from "../MyToast/MyToast";
import Button from "../Button/Button";

interface SliderThemeProps {
  sliders: ITopic[]
}

const personalProjectAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const slidesPerView = (width: number) => {
  if(width <= 950 && width > 600) {
    return 2;
  }
  if(width <= 600) {
    return 1;
  }
  return 3;
}

const SliderTheme:FC<SliderThemeProps> = ({sliders}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);
  const {width} = useWindowDimensions()

  const changeVideoUrl = (videoUrl: string) => {
    try {
      return require(`../../../assets/videos/${videoUrl}`)
    } catch (error) {
      MyToast('Не удалось загрузить лекцию', false)
    }
  }

  useEffect(() => {
    const handler = setTimeout(()=> {
      setIsPlayVideo(true)
    }, 2000)

    return () => {
      clearTimeout(handler)
    }
  }, [activeIndex])

  return (
    <>
      <div className={cn(styles.container, {
        [styles.desktopContainer]: width > 950,
        [styles.tabletContainer]: width <= 950 && width > 600,
        [styles.mobileContainer]: width <= 600
      })}>
        <Swiper
          slidesPerView={slidesPerView(width)}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction"
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.swiperCard}
          onRealIndexChange={(element)=> {
            setActiveIndex(element.activeIndex)   
            setIsPlayVideo(false)}
          }
        >
          {sliders.map((slider, idx) =>     
            <SwiperSlide key={slider.id}>
              <div className={styles.containerPoster}>
                <img className={cn(styles.img, {[styles.displayNoneImg]: isPlayVideo === true && idx === activeIndex})} src={require('../../../assets/img/react-poster.png')} alt="Постер."/>
                {isPlayVideo === true && idx === activeIndex && 
                  <motion.video className={styles.videos} 
                  transition={{duration: 0.5}}       
                  initial='hidden'
                  whileInView='visible'
                  viewport={{once: true}}
                  variants={personalProjectAnimation} 
                  src={changeVideoUrl(slider.videoUrl)} autoPlay muted loop/>}
              </div>
              <h2 className={styles.title}>#{idx + 1} {slider.titleTopic}</h2>
              <p className={styles.description}>{slider.descriptionTopic}</p>
              <Link className={styles.btnContainer} to={slider.id}><Button className={styles.btn} color="Pink">Начать</Button></Link>
          </SwiperSlide>)}
        </Swiper>
      </div>
    </>
  );
}

export default SliderTheme;
