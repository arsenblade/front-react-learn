import {FC} from 'react'
import styles from './Footer.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const vkWhite = require('../../../assets/img/vk-white.png')
const vkBlack = require('../../../assets/img/vk-black.png')


interface IFooter {
  color: 'black' | 'white'
  className?: string
}

const Footer:FC<IFooter> = ({color, className}) => {
  return (
    <div className={cn(styles.container, {
      [styles.containerWhite]: color === 'white',
      [styles.containerBlack]: color === 'black',
      [`${className}`]: className && className
    })}>
      <div className={cn(styles.footer, {
        [styles.whiteFooter]: color === 'white',
        [styles.blackFooter]: color === 'black'
      })}>
        <h2>Сайт сделан</h2>
        <div className={styles.containerLink}>
          <a className={styles.iconLink} href='https://vk.com/arsenkhuranovran' target="_blank">
            {color === 'black' && <img src={vkWhite} alt="vk"/>}
            {color === 'white' && <img src={vkBlack} alt="vk"/>}
          </a>
          <a className={styles.iconLink} href='https://vk.com/id243699437' target="_blank">
            {color === 'black' && <img src={vkWhite} alt="vk"/>}
            {color === 'white' && <img src={vkBlack} alt="vk"/>}
          </a>
          <a className={styles.iconLink} href='https://vk.com/id398089965' target="_blank">
            {color === 'black' && <img src={vkWhite} alt="vk"/>}
            {color === 'white' && <img src={vkBlack} alt="vk"/>}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
