import React, {FC, useState} from 'react'
import styles from './MobileMenuSelect.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { MobileMenuSelectProps } from './mobile-menu-select.interface'

const MobileMenuSelect:FC<MobileMenuSelectProps> = ({options, title, setVisibleMenu}) => {
  const [isOpen, setIsOpen] = useState<undefined | 'open' | 'close'>()

  const handleClickMenu = () => {
    if(isOpen === 'close' || isOpen === undefined) {
      setIsOpen('open')
    }
    if(isOpen === 'open') {
      setIsOpen('close')
    }
  }

  return (
    <div className={cn(styles.menuSelect, {
      [styles.open1]: isOpen === 'open' && options.length === 1,
      [styles.close1]: isOpen === 'close' && options.length === 1,
      [styles.open2]: isOpen === 'open' && options.length === 2,
      [styles.close2]: isOpen === 'close' && options.length === 2,
      [styles.open3]: isOpen === 'open' && options.length === 3,
      [styles.close3]: isOpen === 'close' && options.length === 3,
    })}
    onClick={() => handleClickMenu()}
    >
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.containerLink}>
        {options.map(option => <Link key={option.label} className={styles.link} to={option.link} onClick={() => setVisibleMenu(false)}>{option.label}</Link>)}
      </div>
    </div>
  )
}

export default MobileMenuSelect