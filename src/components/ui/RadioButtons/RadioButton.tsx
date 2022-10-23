import { FC, ReactNode } from 'react'
import styles from './RadioButton.module.scss'
import cn from 'classnames'

interface IRadio {
  children: ReactNode,
  className?: string,
  type: string
}

const RadioButton:FC<IRadio> = ({children, className, type}) => {
  return (
    <label className={cn(styles.radioLabel, {
	  [`${className}`]: className && className
	})}>
	  <input type="radio" className={styles.radioInput} name={type} />
	  <span className={styles.fakeRadio}></span>
	  <p className={styles.radioText}>{children}</p>
	</label>
  )
}

export default RadioButton;