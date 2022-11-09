import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AdminHeader.module.scss'

const AdminHeader = () => {
  return (
    <div className={styles.adminHeader}>
      <h1 className={styles.title}>Панель администратора</h1>
      <div className={styles.containerLink}>
        <Link className={styles.link} to='/manage/statistics'>Статистика</Link>
        <Link className={styles.link} to='/manage/create/topic'>Добавить темы</Link>
      </div>
    </div>
  )
}

export default AdminHeader