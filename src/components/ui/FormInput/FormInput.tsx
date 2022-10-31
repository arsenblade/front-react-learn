import React, { FC, InputHTMLAttributes } from 'react'
import styles from './FormInput.module.scss'
import cn from 'classnames'

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {}
const FormInput = React.forwardRef<HTMLInputElement, IFormInput>(({className, ...rest}, ref) => {
  return (
    <input ref={ref} className={cn(styles.formInput, className)} {...rest}/>
  )
})

export default FormInput;