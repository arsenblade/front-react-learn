import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import Button from '../../../ui/Button/Button'
import styles from './TopicReact.module.scss'
import cn from 'classnames'

const img = require('../../../../assets/img/react-poster.png')

const TopicReact = () => {
  const [isPlaying, setIsPlaying] =  useState(false)

  return (
    <div className={styles.topicReact}>
      <h1 className={styles.title}>#1 Введение</h1>
      <div className={styles.containerPlayer}>
        <ReactPlayer
          style={{margin: '0 auto', width: '100%'}} 
          url={'/uploads/cinema/doctor-strange-video.mp4'} 
          playing={isPlaying} 
          playIcon={<button className={styles.playButton} 
          onClick={() => setIsPlaying(true)}></button>} 
          light={img} 
          controls={true}
          volume={0.5}/>
      </div>
      <div className={styles.btnContainer}>
        <Button className={cn(styles.btn, styles.btnBack)} color='White'>Назад</Button>
        <Button className={cn(styles.btn, styles.btnNext)} color='Pink'>Перейти к заданию</Button>
      </div>
    </div>
  )
}

export default TopicReact