import React, {useState} from 'react'
import ProfileContent from './ProfileContent/ProfileContent'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import styles from './Profile.module.scss'
import Footer from '../Footer/Footer'

const Profile = () => {
  const [typeContent, setTypeContent] = useState<'statistics' | 'settings'>('settings')

  return (
    <div className={styles.profile}>
      <ProfileHeader setValue={setTypeContent} value={typeContent}/>
      <div className={styles.contentContainer}>
        <ProfileContent type={typeContent} setValue={setTypeContent} value={typeContent}/>
      </div>
      <Footer color='white' />
    </div>
  )
}

export default Profile