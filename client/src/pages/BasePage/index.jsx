import React from 'react'
import { Outlet } from 'react-router'
import styles from './BasePage.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function BasePage () {
  return (
    <div className={styles.basePageContainer}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default BasePage
