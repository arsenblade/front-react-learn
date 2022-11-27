import { FC, useState} from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames';
import styles from './NavBar.module.scss'
import Select from '../../../ui/Select/Select';
import { IOption } from '../../../ui/Select/select.interface';
import UserMenu from '../../../ui/UserMenu/UserMenu';
import { useAuth } from '../../../../hooks/useAuth';
import MobileMenuSelect from '../../../ui/MobileMenuSelect/MobileMenuSelect';
import { useActions } from '../../../../hooks/useActions';
import { CSSTransition } from 'react-transition-group';

interface INavBarProps {
  Auth: boolean
}

interface IMenuOptions {
  value: string,
  label: string
}

const allCourseSelect: IOption[] = [{label: 'Курс - реакт разработчик', value: 'react-developer-course', link: '/'}]

const myLearnSelect: IOption[] = [ {label: 'Реакт разработчик', value: 'react-developer-learn', link: '/topics/react'}]

const userMenuItems: IMenuOptions[] = [ {label: 'Личный кабинет', value: 'personal-area'}, {label: 'Выход', value: 'exit'}]

const adminMenuItems: IMenuOptions[] = [ {label: 'Личный кабинет', value: 'personal-area'}, {label: 'Админ панель', value: 'admin-panel'}, {label: 'Выход', value: 'exit'}]

const NavBar:FC<INavBarProps> = ({Auth}) => {
 const [navBarListVisible, setNavBarListVisible] = useState<boolean>(false)
 const [valueMySettings, setValueMySettings] = useState<IMenuOptions | undefined>()
 const {logout} = useActions()
 const {user, isLoading} = useAuth()



  return (
    <nav className={cn(styles.navBar)}>
      <CSSTransition
        in={navBarListVisible}
        classNames={'test-animation'}
        timeout={500}
        mountOnEnter
        unmountOnExit
        >
        <div className={cn(styles.navBarListMobile, styles.navBarListMobileOpened)}>
          <div className={styles.navBarItem}>
            <MobileMenuSelect options={allCourseSelect} title='Курсы' setVisibleMenu={setNavBarListVisible}/>
          </div>
          {user && <div className={styles.navBarItem}>
            <MobileMenuSelect options={myLearnSelect} title='Мое обучение' setVisibleMenu={setNavBarListVisible}/>           
          </div>}
          {user && <div className={styles.navBarLink}>
            <Link to="/profile/settings" className={styles.profileLink} onClick={()=>{setNavBarListVisible(false)}}>Личный кабинет</Link>
          </div>}
          {user && user.isAdmin && <div className={styles.navBarLink}>
            <Link to="/manage/statistics" className={styles.adminLink} onClick={()=>{setNavBarListVisible(false)}}>Админ панель</Link>
          </div>}
          <div className={styles.navBarLink}>
            {isLoading === false && !user && <Link to="/login" className={styles.loginLink} onClick={()=>{setNavBarListVisible(false)}}>{'Войти'}</Link>}
            {user && <div className={styles.logout} onClick={() => logout()}>Выйти</div>}
          </div>
        </div>
      </CSSTransition>
      <div className={cn(styles.navBarListDesktop)}>
          <div className={styles.selectContainer}>
            <Select options={allCourseSelect} placeholder='Курсы'/>
            <Select options={myLearnSelect} placeholder='Мое обучение'/>
          </div>
          {user && <div className={styles.userMenu}>
            <UserMenu isAdmin={user.isAdmin} options={user.isAdmin === true ? adminMenuItems : userMenuItems} onChange={setValueMySettings} value={valueMySettings}/>
          </div>}
          {isLoading === false && !user && 
          <Link className={styles.authorizationLink} to='/login'>
            Войти
          </Link>}
      </div>
      <button className={cn(styles.navToggle, {
        [styles.openBtn]: navBarListVisible === true,
        [styles.closeBtn]: navBarListVisible === false 
      })} type='button' onClick={()=>{
        setNavBarListVisible(!navBarListVisible)
        }}>
          <span className={styles.visuallyHidden}>Открыть меню</span>
      </button>
    </nav>
  )
}

export default NavBar