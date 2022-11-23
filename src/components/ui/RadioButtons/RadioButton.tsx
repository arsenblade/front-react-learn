import { FC, ReactNode } from 'react'
import styles from './RadioButton.module.scss'
import cn from 'classnames'

interface IRadio {
  children: ReactNode,
  type: string,
  onChange?: (checked: boolean) => void,
  checked?: boolean,
  className?: string,
}

const RadioButton:FC<IRadio> = ({children, className, type, onChange, checked}) => {
  return (
    <label className={cn(styles.radioLabel, {
	  [`${className}`]: className && className
	})}>
	  <input type="radio" onChange={(e) => onChange &&  onChange(e.currentTarget.checked)} className={styles.radioInput} name={type} checked={checked}/>
	  <span className={styles.fakeRadio}></span>
	  <p className={styles.radioText}>{children}</p>
	</label>
  )
}

export default RadioButton;