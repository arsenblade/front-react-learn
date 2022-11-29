import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { ITopic } from '../../../types/topic.types'
import SliderThemeDesktop from '../../ui/SliderTheme/SliderThemeDesktop/SliderThemeDesktop'
import styles from './TopicsReact.module.scss'
import { useTopicsReact } from './useTopicReact'

const TopicsReact = () => {
  const {data, isLoading} = useTopicsReact()
  let sortAllTopics: ITopic[] = []
  if(data) {
    sortAllTopics = data.sort((a, b) => a.numberTopic - b.numberTopic)
  }

  return (
    <div className={styles.topicsReact}>
      {!isLoading && data && 
      <div className={styles.loadingAnimation}>
        <h1 className={styles.title}>Курс React – разработчик</h1>
        <div className={styles.sliderDesktop}>
          <SliderThemeDesktop sliders={sortAllTopics || []} />
        </div>
      </div>}
    </div>
  )
}

export default TopicsReact