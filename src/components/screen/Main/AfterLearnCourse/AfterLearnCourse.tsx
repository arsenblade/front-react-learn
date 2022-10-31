import React, { useState } from 'react'
import { getSalary } from '../../../../utils/getSalary'
import RangeSlider from '../../../ui/RangeSlider/RangeSlider'
import styles from './AfterLearnCourse.module.scss'
import cn from 'classnames'

const AfterLearnCourse = () => {
  const [valueSalary, setValueSalary] = useState([40])

  return (
    <div className={styles.afterLearnCourse}>
      <div className={styles.knowledgeAfterCourse}>
        <h2 className={styles.title}>Чему вы научитесь после прохождения курса React – разработчик</h2>
        <ul className={styles.knowledgeList}>
          <li className={styles.knowledgeItem}>разрабатывать проекты на библеотеке React</li>
          <li className={styles.knowledgeItem}>пользоваться языком TypeScript</li>
          <li className={styles.knowledgeItem}>применять различные библиотеки помимо React</li>
        </ul>
      </div>
      <div className={styles.salaryAfterCourse}>
        <h2 className={styles.title}>После обучения вы можете претендовать на зарпалату junior-разработчика</h2>
        <p className={styles.salaryText}>Ваша будущая зарплата – <span>{getSalary(valueSalary)} ₽</span></p>
        <div className={styles.rangeSlider}>
          <span className={styles.junLvlText}>Junior</span>
          <span className={styles.midLvlText}>Middle</span>
          <span className={styles.senLvlText}>Senior</span>
          <RangeSlider values={valueSalary} setValues={setValueSalary}/>
        </div>
      </div>
    </div>
  )
}

export default AfterLearnCourse