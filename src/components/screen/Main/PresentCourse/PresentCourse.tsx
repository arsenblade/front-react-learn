import React from 'react'
import Button from '../../../ui/Button/Button'
import styles from './PresentCourse.module.scss'

const logo = require('../../../../assets/img/programmist.jpg')

const PresentCourse = () => {
  return (
    <div className={styles.presentCourse}>
      <div className={styles.infoCourse}>
        <span className={styles.clarification}>Онлайн курс</span>
        <h1 className={styles.title}>Реакт – разработчик</h1>
        <p className={styles.description}>Освойте в асинхронном режиме навыки, необходимые для реакт-разработчика. Научитесь применять востребованные технологии и глубже разберитесь 
        в&nbsp;том&nbsp;,&nbsp;как&nbsp;всё устроено.</p>
        <Button className={styles.btn} color='Pink'>Подробнее</Button>
      </div>
      <img className={styles.img} width={559} height={405} src={logo} alt='Картинка программиста.'/>
    </div>
  )
}

export default PresentCourse