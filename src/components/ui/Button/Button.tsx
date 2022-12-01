import { FC, ReactNode, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
import {motion} from 'framer-motion'

interface IButton {
  children: ReactNode
  color: 'Pink' | 'White' | 'Violet'
  disabled?: boolean,
  className?: string,
  onClick?: () => void 
}

const Button = forwardRef<HTMLDivElement, IButton>(({color, className, children, onClick, disabled}, ref) => {

  return (
    <div  ref={ref} className={cn(styles.btn, {
      [styles.btnWhite]: color === 'White',
      [styles.btnPink]: color === 'Pink',
      [styles.btnViolet]: color === 'Violet',
      [`${className}`]: className && className,
      [styles.disabled]: disabled,
      [styles.noDisabled]: !disabled,
    })}
    onClick={() => onClick && !disabled && onClick()} 
    >
      {children}
      <span className={styles.spanOne}></span>
      <span className={styles.spanTwo}></span>
      <span className={styles.spanThree}></span>
      <span className={styles.spanFour}></span>
    </div>
  )
})

export default motion(Button)