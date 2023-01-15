import React, { useState } from 'react'
import { getSalary } from '../../../../utils/getSalary'
import RangeSlider from '../../../ui/RangeSlider/RangeSlider'
import styles from './AfterLearnCourse.module.scss'
import {motion} from 'framer-motion'

const itemAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2}
  })
}

const titleAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const AfterLearnCourse = () => {
  const [valueSalary, setValueSalary] = useState([40])

  return (
    <section className={styles.afterLearnCourse}>
      <motion.div 
        className={styles.knowledgeAfterCourse}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
        style={{overflow: 'hidden'}}
      >
        <motion.h2 className={styles.title} variants={titleAnimation}>Чему вы научитесь после прохождения курса React – разработчик</motion.h2>
        <motion.ul className={styles.knowledgeList}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
        >
          <motion.li className={styles.knowledgeItem} variants={itemAnimation} custom={1}>разрабатывать проекты на библеотеке React</motion.li>
          <motion.li className={styles.knowledgeItem} variants={itemAnimation} custom={2}>пользоваться языком TypeScript</motion.li>
          <motion.li className={styles.knowledgeItem} variants={itemAnimation} custom={3}>применять различные библиотеки помимо React</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div 
      className={styles.salaryAfterCourse}        
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.3, once: true}}
      style={{overflow: 'hidden'}}>
        <motion.h2 className={styles.title} variants={titleAnimation}>После обучения вы можете претендовать на зарпалату junior-разработчика</motion.h2>
        <motion.p className={styles.salaryText} variants={itemAnimation} custom={1}>Ваша будущая зарплата – <span>{getSalary(valueSalary)} ₽</span></motion.p>
        <motion.div className={styles.rangeSlider} 
        variants={itemAnimation} 
        custom={2}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
        >
          <span className={styles.junLvlText}>Junior</span>
          <span className={styles.midLvlText}>Middle</span>
          <span className={styles.senLvlText}>Senior</span>
          <RangeSlider values={valueSalary} setValues={setValueSalary}/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AfterLearnCourse