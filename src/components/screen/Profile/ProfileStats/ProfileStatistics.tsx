import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth'
import { ITopic } from '../../../../types/topic.types'
import { IStatUser, IUser } from '../../../../types/user.types'
import { getFilledTests } from '../../../../utils/getFilledTests'
import StatisticsTable from '../../../ui/StatisticsTable/StatisticsTable'
import styles from './ProfileStatistics.module.scss'
import cn from 'classnames'
import { topicService } from '../../../../service/topics/topics.service'
import { userService } from '../../../../service/user/user.service'
import { getUserAverageScore } from '../../../../utils/getUserAverageScore'
import { getAverageScore } from '../../../../utils/getAverageScore'

const photoUser = require('../../../../assets/img/author-img.png')

const ProfileStatistics = () => {
  const [averageUserScores, setAverageUserScores] = useState<IStatUser[]>([])
  const [currentUser, setCurrentUser] = useState<IUser>()
  const [allTopics, setAllTopics] = useState<ITopic[]>([])
  const {pathname} = useLocation()
  const {user} = useAuth()

  useEffect(() => {
    getCurrentUsers()
    getAllTopics()
  }, [])

  useEffect(() => {
    if(allTopics.length > 0 && currentUser) {
      setAverageUserScores(getUserAverageScore(currentUser, allTopics))
    }
  }, [currentUser, allTopics])

  const getCurrentUsers = async () => {
    if(user) {
      const {data: userData} = await userService.getById(user.id)
      setCurrentUser(userData)
    }
  }

  const getAllTopics = async () => {
    const {data: topicData} = await topicService.getAll()
    setAllTopics(topicData)
  }

  return (
    <div className={styles.profileStatistics}>
      <div className={styles.containerImg}>
        <img className={styles.img} width={290} height={290} src={photoUser} alt='Фото пользователя.' />
        <h2 className={styles.title}>{currentUser?.name || ''}</h2>
        <div className={styles.containerLink}>
        <Link className={cn(styles.link, styles.settings, {
          [styles.currentActiveSettings]: pathname === '/profile/settings'
        })} 
        to='/profile/settings'
        ><span>Настройки профиля</span></Link>
        <Link className={cn(styles.link, styles.statistics, {
          [styles.currentActiveStatistics]: pathname === '/profile/statistics'
        })} 
        to='/profile/statistics'
        ><span>Статистика</span></Link>
        </div>
      </div>
      <div className={styles.userStatistics}>
        <h2 className={styles.title}>Баллы за тесты</h2>
        <StatisticsTable data={averageUserScores} color='pink' percent={false}/>
        <div className={styles.containerStats}>
          <div className={styles.filledTests}>
            <h2>Количество пройденных тестов</h2>
            <h3>{averageUserScores.length > 0 && getFilledTests(averageUserScores)}</h3>
          </div>
          <div className={styles.averageScore}>
            <h2>Средний балл</h2>
            <h3>{averageUserScores.length > 0 && getAverageScore(averageUserScores)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileStatistics