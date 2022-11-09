import { FC, useState} from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames';
import styles from './NavBar.module.scss'
import '../../../styles/variables.scss';

interface INavBarProps {
  Auth: boolean
}


const NavBar:FC<INavBarProps> = ({Auth}) => {
 const [navBarListVisible, setNavBarListVisible] = useState<true|false>(false)
 const [courseVisible, setCourseVisible] = useState<true|false>(false)
 const [myCourseVisible, setMyCourseVisible] = useState<true|false>(false)



  return (
    <nav className={cn(styles.navBar)}>
      <div className={cn(styles.navBarList, {[`${styles.navBarListOpened}`]: navBarListVisible === true, [`${styles.navBarListClosed}`]: navBarListVisible === false})}>
        <div className={styles.navBarItem}>
          <select className={styles.select}></select>
          <div className={styles.coursesList} onClick={()=>{setCourseVisible(!courseVisible)}}>
            <h4>Курсы</h4>
            <div className={cn(styles.course,{[`${styles.courseOpened}`]: courseVisible===true})}>
              <Link to='/'>React – разработчик</Link>
            </div>
            <div className={cn(styles.course,{[`${styles.courseOpened}`]: courseVisible===true})}>
              <Link to='/'>Backend – разработчик</Link>
            </div>
          </div>
        </div>
        <div className={styles.navBarItem}>
          {Auth===true && 
            <>
              <select className={styles.select}></select>
              <div className={styles.coursesList} onClick={()=>{setMyCourseVisible(!myCourseVisible)}}>
                <h4>Моё обучение</h4>
                <div className={cn(styles.course,{[`${styles.courseOpened}`]: myCourseVisible===true})}>
                  <Link to='/'>React – разработчик</Link>
                </div>
                <div className={cn(styles.course,{[`${styles.courseOpened}`]: myCourseVisible===true})}>
                  <Link to='/'>Backend – разработчик</Link>
                </div>
              </div>
            </>            
          }
        </div>
        <div className={styles.navBarItem}>
          <Link to="/login" className={styles.authOut}>{Auth===true ? 'Выйти' : 'Авторизация'}</Link>
        </div>
      </div>
      <button className={styles.navToggle} type='button' onClick={()=>{setNavBarListVisible(!navBarListVisible)}}>
          <span className={styles.visuallyHidden}>Открыть меню</span>
      </button>
    </nav>
  )
}

export default NavBar