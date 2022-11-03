import React, {FC} from 'react'
import styles from './StatisticsTable.module.scss'
import cn from 'classnames'

interface IStatUser {
  value: number;
  isFilled: boolean;
}

interface IStatistics {
  data: IStatUser[];
}

const StatisticsTable:FC<IStatistics> = ({data}) => {
  return (
    <div className={styles.statTableContainer}>
      <div className={styles.statTable}>
        {data.map((statData, idx) => {
          if(statData.isFilled === true) {
            return (<div className={styles.statBarContainer} key={idx}>
              <div className={cn(styles.statBar, {
                [styles.value10]: statData.value === 1,
                [styles.value20]: statData.value === 2,
                [styles.value30]: statData.value === 3,
                [styles.value40]: statData.value === 4,
                [styles.value50]: statData.value === 5,
                [styles.value60]: statData.value === 6,
                [styles.value70]: statData.value === 7,
                [styles.value80]: statData.value === 8,
                [styles.value90]: statData.value === 9,
                [styles.value100]: statData.value === 10,
              })}>
                <div className={cn(styles.valueBar, {
                  [styles.valueZero]: statData.value === 0,
                })}>{statData.value}</div>
              </div>
              <div className={styles.numberBar}>#{idx + 1}</div>
            </div>)
          }
          else {
            return <div className={styles.statBarContainer} key={idx}>
            <div className={styles.statBar}>
              <div className={cn(styles.valueBar, styles.valueZero)}>–</div>
            </div>
            <div className={styles.numberBar}>#{idx + 1}</div>
          </div>
          }
        })}
      </div>
    </div>
  )
}

export default StatisticsTable