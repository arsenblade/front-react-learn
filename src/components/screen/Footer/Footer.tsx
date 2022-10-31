import {FC} from 'react'
import styles from './Footer.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'

interface IFooter {
  color: 'black' | 'white'
}

const Footer:FC<IFooter> = ({color}) => {
  return (
    <div className={cn(styles.container, {
      [styles.containerWhite]: color === 'white',
      [styles.containerBlack]: color === 'black'
    })}>
      <div className={cn(styles.footer, {
        [styles.whiteFooter]: color === 'white',
        [styles.blackFooter]: color === 'black'
      })}>
        <h2>Сайт сделан:</h2>
        <div className={styles.containerLink}>
          <Link className={styles.iconLink} to='vk.com'></Link>
          <Link className={styles.iconLink} to='vk.com'></Link>
          <Link className={styles.iconLink} to='vk.com'></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer