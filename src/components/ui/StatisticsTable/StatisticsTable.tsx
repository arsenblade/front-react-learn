import React, {FC} from 'react'
import styles from './StatisticsTable.module.scss'
import cn from 'classnames'

interface IStatUser {
  value: number;
  isFilled: boolean;
}

interface IStatistics {
  data: IStatUser[];
  color: 'pink' | 'violet'
  percent: boolean
}

const StatisticsTable:FC<IStatistics> = ({data, color, percent}) => {
  return (
    <div className={styles.statTableContainer}>
      <div className={cn(styles.statTable, {
        [styles.pinkScrollBar]: color === 'violet',
        [styles.violetScrollBar]: color === 'pink'
      })}>
        {data.map((statData, idx) => {
          if(statData.isFilled === true) {
            return (
            <div className={styles.statBar}  key={idx}>
              <div className={styles.bodyBarContainer} style={{height: percent === true ? `${statData.value}%` :  `${statData.value*10 * 2}%`}}>
                <div className={cn(styles.bodyBar, {
                  [styles.pinkBody]: color === 'pink',
                  [styles.violetBody]: color === 'violet'
                })}>
                  <div className={cn(styles.valueBar, {
                    [styles.valueZero]: statData.value === 0,
                  })}>{percent === true ? `${statData.value}%` : `${statData.value}`}
                  </div>
                </div>
                <div className={styles.numberBar}>#{idx + 1}</div>
              </div>
            </div>)
          }
          else {
            return (
              <div className={cn(styles.statBar, styles.statBarZero)} key={idx}>
                <div className={styles.bodyBarContainer}>
                  <div className={styles.bodyBar}>
                    <div className={cn(styles.valueBar, styles.valueZero)}>–</div>
                  </div>
                  <div className={styles.numberBar}>#{idx + 1}</div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default StatisticsTable