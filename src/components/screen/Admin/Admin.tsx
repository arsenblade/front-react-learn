import React from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminStatistics from './AdminStatistics/AdminStatistics'
import styles from './Admin.module.scss'

const Admin = () => {
  return (
    <div className={styles.admin}>
      <AdminHeader />
      <div className={styles.adminContent}>
        <AdminStatistics />
      </div>
    </div>
  )
}

export default Admin