import { FC, ReactNode } from 'react'
import styles from './Checkbox.module.scss'
import cn from 'classnames'

interface ICheckbox {
  children: ReactNode,
  className?: string
}

const Checkbox:FC<ICheckbox> = ({children, className}) => {
  return (
    <label className={cn(styles.checkboxLabel, {
	  [`${className}`]: className && className
	})}>
	  <input type="checkbox" className={styles.checkboxInput} />
	  <span className={styles.fakeCheckbox}></span>
	  <p className={styles.checkboxText}>{children}</p>
	</label>
  )
}

export default Checkbox;