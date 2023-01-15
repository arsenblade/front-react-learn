import React from 'react'
import styles from './CourseAuthors.module.scss'
import {motion} from 'framer-motion'
const authorsImg = require('../../../../assets/img/author-img.png')

const courseAuthorsAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const CourseAuthors = () => {
  return (
    <section className={styles.container}>
      <div className={styles.courseAuthors}>
        <motion.h2 className={styles.title}
          initial='hidden'
          whileInView='visible'
          viewport={{amount: 0.4, once: true}}
          variants={courseAuthorsAnimation}
        >Авторы курса</motion.h2>
        <div className={styles.authorContainer}>
          <motion.div className={styles.author}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.4, once: true}}
            variants={courseAuthorsAnimation}
          >
            <img className={styles.img} width={200} height={200} src={authorsImg} alt='Фото автора.' />
            <div className={styles.contentText}>
              <h3 className={styles.name}>Петр</h3>
              <p className={styles.description}>Лучший прогер этой галактики</p>
            </div>
          </motion.div>
          <motion.div className={styles.author}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.4, once: true}}
            variants={courseAuthorsAnimation}
          >
            <img className={styles.img} width={200} height={200} src={authorsImg} alt='Фото автора.' />
            <div className={styles.contentText}>
              <h3 className={styles.name}>Петр</h3>
              <p className={styles.description}>Лучший прогер этой галактики</p>
            </div>
          </motion.div>
          <motion.div className={styles.author}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.4, once: true}}
            variants={courseAuthorsAnimation}
          >
            <img className={styles.img} width={200} height={200} src={authorsImg} alt='Фото автора.' />
            <div className={styles.contentText}>
              <h3 className={styles.name}>Петр</h3>
              <p className={styles.description}>Лучший прогер этой галактики</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CourseAuthors