import React from 'react'
import styles from './PersonalProject.module.scss'
import {motion} from 'framer-motion'
const projectVideo = require('../../../../assets/videos/first-class.mp4')

const personalProjectAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const PersonalProject = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personalProject}>
        <motion.div className={styles.textContent}
          initial='hidden'
          whileInView='visible'
          viewport={{amount: 0.4, once: true}}
          variants={personalProjectAnimation}
        >
          <h2 className={styles.title}>Личный проект</h2>
          <p className={styles.description}>После каждой темы на курсе вы будете применять знания на личном проекте. По&nbsp;окончании курса у вас будет готовый проект, который можно будет добавить себе в&nbsp;портфолио</p>
        </motion.div>
        <motion.video className={styles.videos}           
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.4, once: true}}
        variants={personalProjectAnimation} width={568} height={320} src={projectVideo} autoPlay muted loop/>
      </div>
    </div>
  )
}

export default PersonalProject