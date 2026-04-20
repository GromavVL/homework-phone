import React from 'react'
import { Link } from 'react-router'
import styles from './Header.module.scss'

function Header () {
  return (
    <div className={styles.headerOuter}>
      <header className={styles.headerContainer}>
        <Link to='/' className={styles.logo}>PhoneStore</Link>
        <nav className={styles.navigate}>
          <ul className={styles.preLink}>
            <li className={styles.navigateLink}>
              <Link to='/' className={styles.link}>Головна</Link>
            </li>
            <li className={styles.navigateLink}>
              <Link to='/catalog' className={styles.link}>Каталог</Link>
            </li>
            <li className={styles.navigateLink}>
              <Link to='/form' className={styles.link}>Додати</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
