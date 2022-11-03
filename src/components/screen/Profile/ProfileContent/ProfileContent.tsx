import React, {FC, Dispatch, SetStateAction} from 'react'
import Button from '../../../ui/Button/Button'
import FormInput from '../../../ui/FormInput/FormInput'
import styles from './ProfileContent.module.scss'
import cn from 'classnames'
import { getAverageScore } from '../../../../utils/getAvaregeScore'
import { getFilledTests } from '../../../../utils/getFilledTests'
import StatisticsTable from '../../../ui/StatisticsTable/StatisticsTable'
const photoUser = require('../../../../assets/img/author-img.png')

interface IContent {
  type: 'settings' | 'statistics'
  value: "statistics" | "settings"
  setValue: Dispatch<SetStateAction<"statistics" | "settings">>
}


const ProfileContent:FC<IContent> = ({type, setValue, value}) => {
  const testStats = [{value: 1, isFilled: true}, {value: 6, isFilled: true}, {value: 0, isFilled: true}, {value: 1, isFilled: true}, {value: 6, isFilled: true}, {value: 0, isFilled: true}, {value: 9, isFilled: true}, {value: 3, isFilled: true}, {value: 0, isFilled: true}, {value: 8, isFilled: true}, {value: 4, isFilled: true}, {value: 10, isFilled: true}, {value: 0, isFilled: false},]

  return (
    <div className={styles.profileContent}>
      <div className={styles.containerImg}>
        <img className={styles.img} width={290} height={290} src={photoUser} alt='Фото пользователя.' />
        <h2 className={styles.title}>Арсен</h2>
        <div className={styles.containerBtn}>
          <button className={cn(styles.settings, {
            [styles.activeSettings]: value === 'settings'
          })} onClick={() => setValue('settings')}></button>
          <button className={cn(styles.statistics, {
            [styles.activeStatistics]: value === 'statistics'
          })} onClick={() => setValue('statistics')}></button>
        </div>
      </div>
      {type === 'settings' &&       <div className={styles.userSettings}>
        <div className={styles.containerField}>
          <span>Имя</span>
          <FormInput className={styles.field}/>
        </div>
        <div className={styles.containerField}>
          <span>E-mail</span>
          <FormInput className={styles.field}/>
        </div>
        <div className={styles.containerField}>
          <span>Пароль</span>
          <FormInput className={styles.field}/>
        </div>
        <Button className={styles.btn} color='Pink'>Сохранить</Button>
      </div>}
      {type === 'statistics' && 
        <div className={styles.userStatistics}>
          <h2 className={styles.title}>Баллы за тесты</h2>
          <StatisticsTable data={testStats} />
          <div className={styles.containerStats}>
            <div className={styles.filledTests}>
              <h2>Количество пройденных тестов</h2>
              <h3>{getFilledTests(testStats)}</h3>
            </div>
            <div className={styles.averageScore}>
              <h2>Средний балл</h2>
              <h3>{getAverageScore(testStats)}</h3>
            </div>
          </div>
        </div>}
  </div>
  )
}

export default ProfileContent