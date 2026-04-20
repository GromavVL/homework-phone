import React from 'react'
import PhoneForm from '../../components/PhoneForm'
import styles from './PhoneFormPage.module.scss'

function PhoneFormPage () {
  return (
    <div className={styles.wrapper}>
      <p className={styles.eyebrow}>Новий запис</p>
      <h1 className={styles.title}>Додати телефон</h1>
      <PhoneForm />
    </div>
  )
}

export default PhoneFormPage
