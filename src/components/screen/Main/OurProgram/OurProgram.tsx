import React from 'react'
import Button from '../../../ui/Button/Button'
import InfoCircle from '../../../ui/Info-circle/InfoCircle'

import styles from './OurProgram.module.scss'

const OurProgram = () => {
  return (
    <div className={styles.ourProgram}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Программа нашего курса</h2>
        <p className={styles.description}>Станьте React – разработчиком за 3 месяца. Мы поднимем ваши хард – скиллы до Junior уровня. Более подробно вы можете ознакомится перейдя по ссылке </p>
        <Button className={styles.btn} color='White'>Подробнее</Button>
      </div>
      <div className={styles.spinnerProgram}>
        <InfoCircle />
      </div>
    </div>
  )
}

export default OurProgram