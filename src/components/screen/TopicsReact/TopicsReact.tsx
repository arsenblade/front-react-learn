import React from 'react'
import SliderThemeDesktop from '../../ui/SliderTheme/SliderThemeDesktop/SliderThemeDesktop'
import SliderThemeMobile from '../../ui/SliderTheme/SliderThemeMobile/SliderThemeMobile'
import styles from './TopicsReact.module.scss'
import { useTopicsReact } from './useTopicReact'

const TopicsReact = () => {
  const {data, isLoading} = useTopicsReact()

  return (
    <div className={styles.topicsReact}>
      <h1 className={styles.title}>Курс React – разработчик</h1>
      <div className={styles.sliderDesktop}>
        <SliderThemeDesktop sliders={data || []} />
      </div>
      <div className={styles.sliderMobile}>
        <SliderThemeMobile sliders={data || []} />
      </div>
    </div>
  )
}

export default TopicsReact