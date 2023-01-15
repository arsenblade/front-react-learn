import {FC, MutableRefObject} from 'react'
import Button from '../../../ui/Button/Button'
import {motion} from 'framer-motion'
import styles from './OurProgram.module.scss'
import { MyToast } from '../../../ui/MyToast/MyToast'
import InfoCircle from '../../../ui/InfoCircle/InfoCircle'

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
    <motion.section className={styles.ourProgram}         
    initial='hidden'
    whileInView='visible'
    viewport={{amount: 0.5, once: true}}
    id='ourProgram'
    style={{overflow: 'hidden'}}>
      <motion.div className={styles.contentContainer} variants={ourProgramAnimation}>
        <h2 className={styles.title}>Программа нашего курса</h2>
        <p className={styles.description}>Станьте React – разработчиком за 3 месяца. Мы поднимем ваши хард – скиллы до Junior уровня. Более подробно вы можете ознакомится перейдя по ссылке </p>
        <Button className={styles.btn} color='White' onClick={() => MyToast('Программа курса еще не составлена', false)}>Подробнее</Button>
      </motion.div>
      <motion.div className={styles.spinnerProgram} variants={ourProgramAnimation}>
        <InfoCircle />
      </motion.div>
    </motion.section>
  )
}

export default OurProgram
