import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import { FC } from 'react'

interface IHeaderProps {
    Auth: boolean
  }

const Header:FC<IHeaderProps> = ({Auth})=> {
  return (
    <header className={styles.Header}>
        <Logo/>
        <NavBar Auth={Auth}/>
    </header>
  )
}

export default Header