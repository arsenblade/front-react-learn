import React, {FC, useState} from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminStatistics from './AdminStatistics/AdminStatistics'
import styles from './Admin.module.scss'
import AdminCreateTopic from './AdminCreateTopic/AdminCreateTopic'
import Footer from '../Footer/Footer'

interface AdminProps {
  type: 'statistics' | 'createTopic'
}

const Admin:FC<AdminProps> = ({type}) => {

  return (
    <div className={styles.admin}>
      <AdminHeader />
      <div className={styles.adminContent}>
        {type === 'createTopic' && <AdminCreateTopic />}
        {type === 'statistics' && <AdminStatistics />}
      </div>
      <Footer className={styles.footer} color='white' />
    </div>
  )
}

export default Admin