import React from 'react'
import Button from '../../../ui/Button/Button'
import InfoCircle from '../../../ui/Info-circle/InfoCircle'
import {motion} from 'framer-motion'
import styles from './OurProgram.module.scss'

const ourProgramAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const OurProgram = () => {
  return (
    <motion.div className={styles.ourProgram}         
    initial='hidden'
    whileInView='visible'
    viewport={{amount: 0.5, once: true}}
    style={{overflow: 'hidden'}}>
      <motion.div className={styles.contentContainer} variants={ourProgramAnimation}>
        <h2 className={styles.title}>Программа нашего курса</h2>
        <p className={styles.description}>Станьте React – разработчиком за 3 месяца. Мы поднимем ваши хард – скиллы до Junior уровня. Более подробно вы можете ознакомится перейдя по ссылке </p>
        <Button className={styles.btn} color='White'>Подробнее</Button>
      </motion.div>
      <motion.div className={styles.spinnerProgram} variants={ourProgramAnimation}>
        <InfoCircle />
      </motion.div>
    </motion.div>
  )
}

export default OurProgram