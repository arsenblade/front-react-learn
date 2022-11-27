import {useEffect, useState} from 'react'
import { topicService } from '../../../../service/topics/topics.service'
import { userService } from '../../../../service/user/user.service'
import { ITopic } from '../../../../types/topic.types'
import { IStatUser, IUser } from '../../../../types/user.types'
import { getAdminAverageScore } from '../../../../utils/getAdminAverageScore'
import { getCourseGraduates } from '../../../../utils/getCourseGraduates'
import { getPercentTopicCovered } from '../../../../utils/getPercentTopicCovered'
import StatisticsTable from '../../../ui/StatisticsTable/StatisticsTable'
import styles from './AdminStatistics.module.scss'


const AdminStatistics = () => {
  const [averageUsersScores, setAverageUsersScores] = useState<IStatUser[]>([])
  const [countCoveredTopic, setCountCoveredTopic] = useState<IStatUser[]>([])
  const [allUsers, setAllUsers] = useState<IUser[]>([])
  const [allTopics, setAllTopics] = useState<ITopic[]>([])

  useEffect(() => {
    getAllUsers()
    getAllTopics()
  }, [])

  useEffect(() => {
    if(allTopics.length > 0 && allUsers.length > 0) {
      setAverageUsersScores(getAdminAverageScore(allUsers, allTopics))
      setCountCoveredTopic(getPercentTopicCovered(allUsers, allTopics))
    }
  }, [allUsers, allTopics])

  const getAllUsers = async () => {
    const {data: userData} = await userService.getAll()
    setAllUsers(userData)
  }

  const getAllTopics = async () => {
    const {data: topicData} = await topicService.getAll()
    setAllTopics(topicData)
  }

  return (
    <div className={styles.adminStatistics}>
      <div className={styles.containerGraphs}>
        <div className={styles.graph}>
          <h2 className={styles.title}>Средние баллы пользователей за&nbsp;каждую&nbsp;тему</h2>
          <StatisticsTable data={averageUsersScores} color='pink' percent={false}/>
        </div>
        <div className={styles.graph}>
          <h2 className={styles.title}>Процент пользователей закончивших&nbsp;темы</h2>
          <StatisticsTable data={countCoveredTopic} color='violet' percent={true}/>
        </div>
      </div>
      <div className={styles.containerStats}>
            <div className={styles.filledTests}>
              <h2>Количество пользователей</h2>
              <h3>{allUsers.length}</h3>
            </div>
            <div className={styles.averageScore}>
              <h2>Пользователи окончившие курс</h2>
              <h3>{getCourseGraduates(allUsers, allTopics)}</h3>
            </div>
          </div>
    </div>
  )
}

export default AdminStatistics