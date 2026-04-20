import React from 'react'
import PhoneList from '../../components/PhoneList'
import styles from './PhoneCatalogPage.module.scss'

function PhoneCatalogPage () {
  return (
    <div className={styles.catalogWrapper}>
      <p className={styles.eyebrow}>Каталог</p>
      <h1 className={styles.title}>Популярні моделі</h1>
      <PhoneList />
    </div>
  )
}

export default PhoneCatalogPage
