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

const testSelect: IOption[] = [{label: 'Реакт - курс для новичков', value: 'react-beginners-course'}, {label: 'Реакт - курс для провдинутых', value: 'react-advanced-course'}, {label: '5 небольших проектов для резюме', value: 'react-five-project-course'}]

const testSelect2: IOption[] = [ {label: 'Реакт - курс для провдинутых', value: 'react-advanced-course'}, {label: '5 небольших проектов для резюме', value: 'react-five-project-course'}]

const userMenuItems: IOption[] = [ {label: 'Личный кабинет', value: 'personal-area'}, {label: 'Выход', value: 'exit'}]

const adminMenuItems: IOption[] = [ {label: 'Личный кабинет', value: 'personal-area'}, {label: 'Админ панель', value: 'admin-panel'}, {label: 'Выход', value: 'exit'}]

const NavBar:FC<INavBarProps> = ({Auth}) => {
 const [navBarListVisible, setNavBarListVisible] = useState<boolean>(false)
 const [valueCourse, setValueCourse] = useState<IOption | undefined>()
 const [valueMyTraining, setValueMyTraining] = useState<IOption | undefined>()
 const [valueMySettings, setValueMySettings] = useState<IOption | undefined>()
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
            <MobileMenuSelect options={testSelect} title='Курсы' />
          </div>
          {user && <div className={styles.navBarItem}>
            <MobileMenuSelect options={testSelect2} title='Мое обучение' />           
          </div>}
          {user && <div className={styles.navBarLink}>
            <Link to="/profile" className={styles.profileLink} onClick={()=>{setNavBarListVisible(false)}}>Личный кабинет</Link>
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
            <Select onChange={setValueCourse} value={valueCourse} options={testSelect} placeholder='Курсы'/>
            <Select onChange={setValueMyTraining} value={valueMyTraining} options={testSelect2} placeholder='Мое обучение'/>
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