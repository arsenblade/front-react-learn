import React, {Dispatch, SetStateAction, FC} from 'react'
import styles from './ProfileHeader.module.scss'
import cn from 'classnames'

interface ProfileHeaderProps {
  value: "statistics" | "settings"
  setValue: Dispatch<SetStateAction<"statistics" | "settings">>
}

const ProfileHeader:FC<ProfileHeaderProps> = ({value, setValue}) => {

  return (
    <div className={styles.profileHeader}> 
      <h1 className={styles.title}>Личный кабинет</h1>
      <div className={styles.containerBtn}>
        <button className={cn(styles.btn, {
          [styles.currentActive]: value === 'settings'
        })} onClick={() => setValue('settings')}><span>Настройки профиля</span></button>
        <button className={cn(styles.btn, {
          [styles.currentActive]: value === 'statistics'
        })} onClick={() => setValue('statistics')}><span>Моя статистика</span></button>
      </div>
    </div>
  )
}

export default ProfileHeader