import React from 'react'
import { ISlider } from '../../../types/slider.types'
import SliderThemeDesktop from '../../ui/SliderTheme/SliderThemeDesktop/SliderThemeDesktop'
import SliderThemeMobile from '../../ui/SliderTheme/SliderThemeMobile/SliderThemeMobile'
import styles from './TopicsReact.module.scss'

const TopicsReact = () => {
  const slidersTest: ISlider[] = [
    {descriptionTheme: 'В этой теме будет знакомство со стеком технологий, которые будут использоваться в нашем проекте и настройка среды разработки.', titleTheme: 'Введение', isCompleted: false, videoUrl: 'fewfwfw'}, 
    {descriptionTheme: 'В этой теме  использоваться в нашем проекте и настройка среды разработки.', titleTheme: 'Введение', isCompleted: false, videoUrl: 'fewfwfw'},
    {descriptionTheme: 'В этой теме  использоваться в нашем проекте и настройка среды разработки.', titleTheme: 'Введение', isCompleted: false, videoUrl: 'fewfwfw'},
]

  return (
    <div className={styles.topicsReact}>
      <h1 className={styles.title}>Курс React – разработчик</h1>
      <div className={styles.sliderDesktop}>
        <SliderThemeDesktop sliders={slidersTest} />
      </div>
      <div className={styles.sliderMobile}>
        <SliderThemeMobile sliders={slidersTest} />
      </div>
    </div>
  )
}

export default TopicsReact