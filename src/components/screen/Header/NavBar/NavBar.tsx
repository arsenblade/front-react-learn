import { FC, useState} from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames';
import styles from './NavBar.module.scss'
import Select from '../../../ui/Select/Select';
import { IOption } from '../../../ui/Select/select.interface';
import PresentCourse from '../../Main/PresentCourse/PresentCourse';

interface INavBarProps {
  Auth: boolean
}

const testSelect: IOption[] = [{label: 'Реакт - курс для новичков', value: 'react-beginners-course'}, {label: 'Реакт - курс для провдинутых', value: 'react-advanced-course'}, {label: '5 небольших проектов для резюме', value: 'react-five-project-course'}]

const testSelect2: IOption[] = [ {label: 'Реакт - курс для провдинутых', value: 'react-advanced-course'}, {label: '5 небольших проектов для резюме', value: 'react-five-project-course'}]

const NavBar:FC<INavBarProps> = ({Auth}) => {
 const [navBarListVisible, setNavBarListVisible] = useState<true|false>(false)
 const [courseVisible, setCourseVisible] = useState<true|false>(false)
 const [myCourseVisible, setMyCourseVisible] = useState<true|false>(false)
 const [value, setValue] = useState<IOption | undefined>()
 const [value2, setValue2] = useState<IOption | undefined>()



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
        <div className={styles.selectContainer}>
          <Select onChange={setValue} value={value} options={testSelect} placeholder='Курсы'/>
          <Select onChange={setValue2} value={value2} options={testSelect2} placeholder='Мое обучение'/>
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