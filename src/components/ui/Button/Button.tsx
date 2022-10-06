import { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface IInput extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color: 'Pink' | 'White'
}


const Button:FC<IInput> = ({color, className, children, ...rest}) => {
  const [valueHover, setValueHover] = useState<'noHover' | 'onHover' | 'outHover'>('noHover')
  
  const outHover = () => {
    setValueHover('outHover')
  }

  return (
    <button onMouseEnter={() => setValueHover('onHover')} onMouseLeave={() => outHover()} className={cn(styles.btn, className, {
      [styles.btnWhite]: color === 'White'
    })} {...rest}>
      <div className={cn(styles.noHover, {
        [styles.onHoverPink]: valueHover === 'onHover' && color === 'Pink',
        [styles.outHoverPink]: valueHover === 'outHover' && color === 'Pink',
        [styles.onHoverWhite]: valueHover === 'onHover' && color === 'White',
        [styles.outHoverWhite]: valueHover === 'outHover' && color === 'White',
      })}></div>
      <span style={{zIndex: 5}}>{children}</span>
    </button>
  )
}

export default Button