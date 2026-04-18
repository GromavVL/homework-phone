import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import styles from './Header.module.scss'

function Header () {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navigate}>
        <ul className={styles.preLink}>
          <li className={styles.navigateLink}>
            <Link to='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.navigateLink}>
            <Link to='/catalog' className={styles.link}>
              Каталог
            </Link>
          </li>
          <li className={styles.navigateLink}>
            <Link to='/form' className={styles.link}>
              Додати
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
