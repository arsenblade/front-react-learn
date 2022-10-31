import { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './FormInput.module.scss'
import cn from 'classnames'

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {}
const FormInput:FC<IFormInput> = ({className, ...rest}) => {
  return (
    <input className={cn(styles.formInput, className)} {...rest}/>
  )
}

export default FormInput;