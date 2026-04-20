import React from 'react'
import styles from './Footer.module.scss'

function Footer () {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} PhoneStore</span>
    </footer>
  )
}

export default Footer
