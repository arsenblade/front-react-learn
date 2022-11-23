import { FC, ReactNode, AllHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface IButton {
  children: ReactNode
  color: 'Pink' | 'White'
  disabled?: boolean,
  className?: string,
  onClick?: () => void 
}

const Button:FC<IButton> = ({color, className, children, onClick, disabled}) => {

  return (
    <div className={cn(styles.btn, {
      [styles.btnWhite]: color === 'White',
      [styles.btnPink]: color === 'Pink',
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
}

export default Button