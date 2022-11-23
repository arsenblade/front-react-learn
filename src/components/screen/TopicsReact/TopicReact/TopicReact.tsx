import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import Button from '../../../ui/Button/Button'
import styles from './TopicReact.module.scss'
import cn from 'classnames'
import { useNavigate, useParams } from 'react-router-dom'
import { useTopicReact } from './useTopicReact'
import { MyToast } from '../../../ui/MyToast/MyToast'
import { useActions } from '../../../../hooks/useActions'

const TopicReact = () => {
  const [isPlaying, setIsPlaying] =  useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const {createCurrentTest, cleanCurrentQuestion} = useActions()
  const {allTopics, currentTopic, isLoadingAllTopics, isLoadingCurrentTopic} = useTopicReact(id || '')
  let imgUrl;
  let videoUrl;
  if(currentTopic) {
    try {
      imgUrl = require(`../../../../assets/img/${currentTopic.pictureTopicUrl}`)
      videoUrl = require(`../../../../assets/videos/${currentTopic.videoUrl}`)
    } catch (error) {
      MyToast('Не удалось загрузить лекцию', false)
    }
  }

  const indexCurrentTopic = allTopics?.findIndex(topic => topic.id === currentTopic?.id)

  const handleClickTestBtn = () => {
    if(currentTopic && allTopics && indexCurrentTopic !== undefined && indexCurrentTopic !== -1) {
      cleanCurrentQuestion()
      let nextTopicId;
      if(indexCurrentTopic >= allTopics.length - 1) {
        nextTopicId = 'lastTopic'
      }
      else {
        nextTopicId = allTopics[indexCurrentTopic + 1].id
      }
      createCurrentTest({id: currentTopic.relatedQuestionsId, currentTopicTitle: currentTopic.titleTopic, idTest: currentTopic.relatedQuestionsId, nextTopicId: nextTopicId})
      navigate(`/topics/test/${currentTopic.relatedQuestionsId}`)
    }
  }

  const handleClickBack = () => {
    if(indexCurrentTopic && allTopics && indexCurrentTopic > 0) {
      const backTopic = allTopics[indexCurrentTopic - 1]
      navigate(`/topics/react/${backTopic.id}`)
    }
  }

  return (
    <div className={styles.topicReact}>
    <h1 className={styles.title}>#{currentTopic?.numberTopic} {currentTopic?.titleTopic}</h1>
    <div className={styles.containerPlayer}>
      {currentTopic && 
      <ReactPlayer
      style={{margin: '0 auto', width: '100%'}} 
      url={videoUrl || ''}
      playing={isPlaying} 
      playIcon={<button className={styles.playButton} 
      onClick={() => setIsPlaying(true)}></button>} 
      light={imgUrl || ''} 
      controls={true}
      volume={0.5}/>}
    </div>
    {currentTopic && indexCurrentTopic !== undefined && indexCurrentTopic !== -1 &&
    <div className={styles.btnContainer}>
        <Button onClick={() => handleClickBack()} className={cn(styles.btn, styles.btnBack)} color='White' disabled={indexCurrentTopic < 1}>Назад</Button>
        <Button onClick={() => handleClickTestBtn()} className={cn(styles.btn, styles.btnNext)} color='Pink'>Перейти к заданию</Button>
    </div>}
  </div>
  )
}

export default TopicReact