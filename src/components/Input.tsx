import React, { ChangeEventHandler } from 'react'
import styles from './Input.module.css'


export default function Input({
  label,
  helpText,
  readonly,
  onChange,
  value,
}: any) {
  return (
    <>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.frame}>
        <input className={styles.input} value={value} onChange={onChange} />
      </div>
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </>
  )
}
