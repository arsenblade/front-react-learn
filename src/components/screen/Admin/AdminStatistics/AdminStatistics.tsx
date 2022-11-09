import React from 'react'
import StatisticsTable from '../../../ui/StatisticsTable/StatisticsTable'
import styles from './AdminStatistics.module.scss'

const AdminStatistics = () => {
  const testStats = [{value: 1.2, isFilled: true}, {value: 6.1, isFilled: true}, {value: 6.3, isFilled: true}, {value: 1, isFilled: true}, {value: 6.5, isFilled: true}, {value: 0, isFilled: true}, {value: 9.3, isFilled: true}, {value: 3, isFilled: true}, {value: 0, isFilled: true}, {value: 8, isFilled: true}, {value: 4.7, isFilled: true}, {value: 10, isFilled: true}, {value: 0, isFilled: false},]

  return (
    <div className={styles.adminStatistics}>
      <div className={styles.containerGraphs}>
        <div className={styles.graph}>
          <h2 className={styles.title}>Средние баллы пользователей за&nbsp;каждую&nbsp;тему</h2>
          <StatisticsTable data={testStats} color='pink'/>
        </div>
        <div className={styles.graph}>
          <h2 className={styles.title}>Процент пользователей закончивших&nbsp;темы</h2>
          <StatisticsTable data={testStats} color='violet'/>
        </div>
      </div>
      <div className={styles.containerStats}>
            <div className={styles.filledTests}>
              <h2>Количество пройденных тестов</h2>
              <h3>12</h3>
            </div>
            <div className={styles.averageScore}>
              <h2>Средний балл</h2>
              <h3>3</h3>
            </div>
          </div>
    </div>
  )
}

export default AdminStatistics