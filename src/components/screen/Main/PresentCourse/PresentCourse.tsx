import React, {FC, MutableRefObject} from 'react'
import Button from '../../../ui/Button/Button'
import styles from './PresentCourse.module.scss'
import {motion} from 'framer-motion'

const logo = require('../../../../assets/img/programmist.jpg')

const presentAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const PresentCourse = () => {

  return (
    <motion.section 
      className={styles.presentCourse}
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.2, once: true}}
    >
      <motion.div className={styles.infoCourse} variants={presentAnimation}>
        <span className={styles.clarification}>Онлайн курс</span>
        <h1 className={styles.title}>Реакт – разработчик</h1>
        <p className={styles.description}>Освойте в асинхронном режиме навыки, необходимые для реакт-разработчика. Научитесь применять востребованные технологии и глубже разберитесь 
        в&nbsp;том&nbsp;,&nbsp;как&nbsp;всё устроено.</p>
        <a href='#ourProgram'>
          <Button className={styles.btn} color='Pink'>Подробнее</Button>
        </a>
      </motion.div>
      <motion.img className={styles.img} variants={presentAnimation} width={559} height={405} src={logo} alt='Картинка программиста.'/>
    </motion.section>
  )
}

export default PresentCourse