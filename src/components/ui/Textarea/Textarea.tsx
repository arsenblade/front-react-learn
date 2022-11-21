import React, { FC, TextareaHTMLAttributes } from 'react'
import styles from './TextArea.module.scss'
import cn from 'classnames'

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
const Textarea = React.forwardRef<HTMLTextAreaElement, ITextarea>(({className, ...rest}, ref) => {
  return (
    <textarea ref={ref} className={cn(styles.textArea, className)} {...rest}/>
  )
})

export default Textarea;