import React from 'react'
import styles from './CourseAuthors.module.scss'
const authorsImg = require('../../../../assets/img/author-img.png')

const CourseAuthors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.courseAuthors}>
        <h2 className={styles.title}>Авторы курса</h2>
        <div className={styles.authorContainer}>
          <div className={styles.author}>
            <img className={styles.img} width={200} height={200} src={authorsImg} alt='Фото автора.' />
            <div className={styles.contentText}>
              <h3 className={styles.name}>Петр</h3>
              <p className={styles.description}>Лучший прогер этой галактики</p>
            </div>
          </div>
          <div className={styles.author}>
            <img className={styles.img} width={200} height={200} src={authorsImg} alt='Фото автора.' />
            <div className={styles.contentText}>
              <h3 className={styles.name}>Петр</h3>
              <p className={styles.description}>Лучший прогер этой галактики</p>
            </div>
          </div>
          <div className={styles.author}>
            <img className={styles.img} width={200} height={200} src={authorsImg} alt='Фото автора.' />
            <div className={styles.contentText}>
              <h3 className={styles.name}>Петр</h3>
              <p className={styles.description}>Лучший прогер этой галактики</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseAuthors