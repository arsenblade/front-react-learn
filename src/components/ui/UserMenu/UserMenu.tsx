import {FC, useState, useEffect} from 'react'
import { IOption, IUserMenu } from './user-menu.interface'
import styles from './UserMenu.module.scss'
import cn from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'


const UserMenu:FC<IUserMenu> = ({options, isAdmin}) => {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState<undefined | 'visible' | 'invisible'>()
  const [isEnterMouseOnDropdown, setIsEnterMouseOnDropdown] = useState<undefined | boolean>()
  const [isEnterMouseOnUserMenu, setIsEnterMouseOnUserMenu] = useState<undefined | boolean>()
  const {logout} = useActions()
  const navigate = useNavigate()

  const handleClickOption = (option: IOption) => {
    if(option.value === 'personal-area') {
      navigate('/profile/settings')
    }
    if(option.value === 'admin-panel') {
      navigate('/manage/statistics')
    }
    if(option.value === 'exit') {
      logout()
    }
    setIsEnterMouseOnDropdown(false)
    setIsEnterMouseOnUserMenu(false)
    setIsVisibleDropdown('invisible')
  }

  useEffect(() => {
    if((isEnterMouseOnDropdown === false || isEnterMouseOnDropdown === undefined) && isEnterMouseOnUserMenu === false) {
      setIsVisibleDropdown('invisible')
    }
  }, [isEnterMouseOnDropdown, isEnterMouseOnUserMenu])

  const enterMouseUserMenu = () => {
    setIsEnterMouseOnUserMenu(true)
    setIsVisibleDropdown('visible')
  }

  return (
    <div className={cn(styles.userMenuContainer, {
      [styles.openSelectContainer]: isVisibleDropdown === 'visible'
    })}>
      <div className={styles.userMenu}>
        <div className={cn(styles.inputUserMenu, {
          [styles.openInput]: isVisibleDropdown === 'visible',
          [styles.closeInput]: isVisibleDropdown === 'invisible' 
        })}
        onMouseEnter={() => enterMouseUserMenu()}
        onMouseLeave={() => setIsEnterMouseOnUserMenu(false)}
        >
          <div className={styles.iconUser}>

          </div>
        </div>
        <div className={styles.dropdown}
        onMouseEnter={() =>  setIsEnterMouseOnDropdown(true)}
        onMouseLeave={() => setIsEnterMouseOnDropdown(false)}
        >
          <CSSTransition
            in={isVisibleDropdown === 'visible' ? true : false}
            classNames={isAdmin ? 'dropdownListAnimationAdmin' : 'dropdownListAnimationUser'}
            timeout={300}
            mountOnEnter
            unmountOnExit
            >
              <div className={styles.dropdownList}>
              {options.map(option => 
                <div 
                  key={option.value} 
                  className={cn(styles.dropdownItem)}
                  onClick={() => handleClickOption(option)}
                >
                  {option.label}
                </div>)}
              </div>
            </CSSTransition>
        </div>
      </div>
      {isVisibleDropdown === 'visible' && <div className={styles.closeBackground} onClick={() => setIsVisibleDropdown('invisible')}></div>}
    </div>
  )
}

export default UserMenu