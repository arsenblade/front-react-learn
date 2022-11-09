import React from 'react'
import Button from '../../../ui/Button/Button'
import Checkbox from '../../../ui/Checkboxes/Checkbox'
import RadioButton from '../../../ui/RadioButtons/RadioButton'
import styles from './TopicTest.module.scss'
import cn from 'classnames'

const TopicTest = () => {

  return (
    <div className={styles.topicTest}>
      <div className={styles.header}>
        <h1 className={styles.title}>Вопросы по теме #1 Введение</h1>
        <span className={styles.numberTest}>1 / 10</span>
      </div>
      <div className={styles.contentTest}>
        <h2 className={styles.questions}>Сам вопрос</h2>
        <div className={styles.answersContainer}> 
          <RadioButton className={styles.answer} type='1'>Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim</RadioButton>
          <RadioButton className={styles.answer} type='1'>Jump and swim Jump wim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump and swim Jump</RadioButton>
          <RadioButton className={styles.answer} type='1'>Jump and swim Jump and swim Jump and swim Jump and swim Jump</RadioButton>
          <RadioButton className={styles.answer} type='1'>Jump Jump and swim Jump and swim Jump and swim Jump and swim Jump</RadioButton>
        </div>
        <div className={styles.containerBtn}>
          <Button className={cn(styles.btn, styles.btnBack)} color='White'>Назад</Button>
          <Button className={cn(styles.btn, styles.btnNext)} color='Pink'>Следующий вопрос</Button>
        </div>
      </div>
    </div>
  )
}

export default TopicTest