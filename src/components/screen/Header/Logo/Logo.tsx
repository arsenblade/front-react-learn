import { Link } from "react-router-dom"
import styles from "./Logo.module.scss"
const logoMob = require('../../../../assets/img/logoMob.png')
const logoDesk = require('../../../..//assets/img/logoDesk.png')


const Logo = () => {
  return (
    <Link className={styles.logo} to='/'>
      <picture>
        <source media="(min-width: 1440px)" srcSet={logoDesk}/>
        <img className={styles.logotype} src={logoMob} alt="React Learn"/>
      </picture>
   </Link>
  )
}

export default Logo


