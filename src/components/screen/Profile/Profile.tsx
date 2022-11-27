import React, {useState, FC} from 'react'
import ProfileContent from './ProfileContent/ProfileSettings'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.scss'
import Footer from '../Footer/Footer'
import ProfileStatistics from './ProfileStats/ProfileStatistics'
import ProfileSettings from './ProfileContent/ProfileSettings'

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
      <Footer color='white' />
    </div>
  )
}

export default Profile