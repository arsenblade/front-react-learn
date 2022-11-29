import { useEffect, useState} from 'react'
import Button from '../../../ui/Button/Button'
import FormInput from '../../../ui/FormInput/FormInput'
import styles from './ProfileSettings.module.scss'
import cn from 'classnames'
import { IUser } from '../../../../types/user.types'
import { userService } from '../../../../service/user/user.service'
import { useAuth } from '../../../../hooks/useAuth'
import { MyToast } from '../../../ui/MyToast/MyToast'
import { Link, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'
const photoUser = require('../../../../assets/img/author-img.png')

const profileAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const fieldAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}


const ProfileSettings = () => {
  const [currentUser, setCurrentUser] = useState<IUser>()
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const {pathname} = useLocation()
  const [userPassword, setUserPassword] = useState('')
  const {user} = useAuth()

  useEffect(() => {
    getCurrentUsers()
  }, [])

  const getCurrentUsers = async () => {
    if(user) {
      const {data: userData} = await userService.getById(user.id)
      setCurrentUser(userData)
      setUserEmail(userData.email)
      setUserName(userData.name)
      setUserPassword(userData.password)
    }
  }

  const updateUser = () => {
    if(currentUser) {
      userService.updateUser(currentUser.id, userEmail, userPassword, userName)
      MyToast('Обновление прошло успешно', true)
    }
  }

  return (
    <div className={styles.profileSettings}>
      <div className={styles.containerImg}>
        <motion.img className={styles.img} 
        width={290} 
        height={290} 
        variants={profileAnimation}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
        src={photoUser} 
        alt='Фото пользователя.' />
        <motion.h2 className={styles.title}
          variants={profileAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{amount: 0.2, once: true}}
        >{currentUser?.name || ''}</motion.h2>
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
      <motion.div className={styles.userSettings}
        variants={fieldAnimation}
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
        style={{overflow: 'hidden'}}
      >
        <div className={styles.containerField}>
          <span>Имя</span>
          <FormInput className={styles.field} onChange={(e) => setUserName(e.target.value)} value={userName}/>
        </div>
        <div className={styles.containerField}>
          <span>E-mail</span>
          <FormInput className={styles.field} onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
        </div>
        <div className={styles.containerField}>
          <span>Пароль</span>
          <FormInput className={styles.field} onChange={(e) => setUserPassword(e.target.value)} value={userPassword} type='password'/>
        </div>
        <Button className={styles.btn} color='Pink' onClick={() => updateUser()}>Сохранить</Button>
      </motion.div>
  </div>
  )
}

export default ProfileSettings