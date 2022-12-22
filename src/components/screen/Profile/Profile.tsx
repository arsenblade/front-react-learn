import { FC } from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.scss'
import Footer from '../Footer/Footer'
import ProfileStatistics from './ProfileStats/ProfileStatistics'
import ProfileSettings from './ProfileSettings/ProfileSettings'

interface ProfileProps {
  type: 'statistics' | 'settings'
}

const Profile:FC<ProfileProps> = ({type}) => {

  return (
    <div className={styles.profile}>
      <ProfileHeader/>
      <div className={styles.contentContainer}>
        {type === 'settings' && <ProfileSettings />}
        {type === 'statistics' && <ProfileStatistics />}
      </div>
      <Footer className={styles.footer} color='white' />
    </div>
  )
}

export default Profile