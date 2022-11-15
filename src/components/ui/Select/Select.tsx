import {FC, useState} from 'react'
import { IOption, ISelect } from './select.interface'
import styles from './Select.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { getClassAnimation } from '../../../utils/getClassAnimation'


const Select:FC<ISelect> = ({options, value, onChange, placeholder}) => {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState<undefined | 'visible' | 'invisible'>()
  const classAnimation = getClassAnimation(options.length)

  const handleClickOption = (option: IOption) => {
    onChange(option)
    setIsVisibleDropdown('invisible')
  }

  const handleClickInput = () => {
    setIsVisibleDropdown((backValue) => {
      if(backValue === 'invisible') {
        return 'visible'
      }
      if(backValue === 'visible') {
        return 'invisible'
      }
      if(backValue === undefined) {
        return 'visible'
      }
    })
  }

  return (
    <div className={cn(styles.selectContainer, {
      [styles.openSelectContainer]: isVisibleDropdown === 'visible'
    })}>
      <div className={styles.select} onClick={(e) => e.stopPropagation()}>
        <div className={cn(styles.inputSelect, {
          [styles.openInput]: isVisibleDropdown === 'visible',
          [styles.closeInput]: isVisibleDropdown === 'invisible' 
        })} onClick={() => handleClickInput()}>
          <div className={styles.placeholder}>
            {placeholder}
            <svg className={cn(styles.arrowSvg, 
              {
                [styles.arrowSvgOpen]: isVisibleDropdown === 'visible',
              }
            )} xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29"><path   d="m20.5 11.5-6 6-6-6"/></svg>
          </div>
        </div>
        <div className={styles.dropdown}>
              {options.length <= 0 ? 
                <CSSTransition
                in={isVisibleDropdown === 'visible' ? true : false}
                classNames={styles.dropdownListAnimation}
                timeout={300}
                mountOnEnter
                unmountOnExit
                >
                  <div className={styles.dropdownList}>
                    No options
                  </div>
                </CSSTransition>
              : 
                <CSSTransition
                in={isVisibleDropdown === 'visible' ? true : false}
                classNames={classAnimation}
                timeout={300}
                mountOnEnter
                unmountOnExit
                >
                  <div className={styles.dropdownList}>
                  {options.map(option => 
                    <div 
                      key={option.value} 
                      className={cn(styles.dropdownItem , {
                        [styles.noActive]: value?.value !== option.value,
                        [styles.active]: value?.value === option.value
                      })}
                      onClick={() => handleClickOption(option)}
                    >
                      {option.label}
                    </div>)}
                  </div>
                </CSSTransition>}
        </div>
      </div>
      {isVisibleDropdown === 'visible' && <div className={styles.closeBackground} onClick={() => setIsVisibleDropdown('invisible')}></div>}
    </div>
  )
}

export default Select