import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import { ITopic } from '../../../types/topic.types'
import SliderTheme from '../../ui/SliderTheme/SliderTheme'
import Footer from '../Footer/Footer'
import styles from './TopicsReact.module.scss'
import { useTopicsReact } from './useTopicReact'

const TopicsReact = () => {
  const {user} = useAuth()
  const {topicsData, userData, topicsLoading, userLoading} = useTopicsReact(user?.id || '')
  let sortAllTopics: ITopic[] = []
  if(topicsData && userData) {
    sortAllTopics = topicsData.sort((a, b) => a.numberTopic - b.numberTopic).map(topic => {
      if(userData.pointTests.some(test => test.idTest === topic.relatedQuestionsId)) {
        topic.passedTopic = true;
        return topic
      }

      return topic
    })
  }

  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerTopicsReact}>
        <div className={styles.topicsReact}>
          {!topicsLoading && topicsData && 
          <div className={styles.loadingAnimation}>
            <h1 className={styles.title}>Курс React – разработчик</h1>
            <div className={styles.sliderDesktop}>
              <SliderTheme sliders={sortAllTopics || []} />
            </div>
          </div>}
        </div>
      </div>
      <Footer className={styles.footer} color='white' />
    </div>
  )
}

export default TopicsReact