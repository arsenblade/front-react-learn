import { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  className?: string,
  color: 'Pink' | 'White'
}

const Button:FC<IButton> = ({color, className, children}) => {

  return (
    <div className={cn(styles.btn, {
      [styles.btnWhite]: color === 'White',
      [styles.btnPink]: color === 'Pink',
      [`${className}`]: className && className
    })}>
      {children}
      <span className={styles.spanOne}></span>
      <span className={styles.spanTwo}></span>
      <span className={styles.spanThree}></span>
      <span className={styles.spanFour}></span>
    </div>
  )
}

export default Button