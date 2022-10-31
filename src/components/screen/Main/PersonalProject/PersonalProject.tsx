import React from 'react'
import styles from './PersonalProject.module.scss'
const projectVideo = require('../../../../assets/videos/tor-4-video.mp4')

const PersonalProject = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personalProject}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Личный проект</h2>
          <p className={styles.description}>После каждой темы на курсе вы будете применять знания на личном проекте. По&nbsp;окончании курса у вас будет готовый проект, который можно будет добавить себе в&nbsp;портфолио</p>
        </div>
        <video className={styles.videos} width={568} height={320} src={projectVideo} autoPlay muted loop/>
      </div>
    </div>
  )
}

export default PersonalProject