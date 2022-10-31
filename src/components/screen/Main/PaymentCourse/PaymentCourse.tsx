import React from 'react'
import Button from '../../../ui/Button/Button'
import styles from './PaymentCourse.module.scss'

const PaymentCourse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paymentCourse}>
        <h2 className={styles.title}>Записаться и оплатить курс
        «React-разработчик»</h2>
        <div className={styles.containerPrice}>
          <h2 className={styles.price}>1999</h2>
          <span className={styles.clarification}>₽ в месяц</span>
          <span className={styles.priceNoDiscount}>3999₽</span>
        </div>
        <Button className={styles.btn} color='Pink'>Оплатить</Button>
      </div>
    </div>
  )
}

export default PaymentCourse