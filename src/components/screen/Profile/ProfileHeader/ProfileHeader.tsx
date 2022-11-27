import React, {Dispatch, SetStateAction, FC} from 'react'
import styles from './ProfileHeader.module.scss'
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const ProfileHeader = () => {
  const {pathname} = useLocation()

  return (
    <div className={styles.profileHeader}> 
      <h1 className={styles.title}>Личный кабинет</h1>
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
  )
}

export default ProfileHeader