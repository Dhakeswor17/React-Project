import React from 'react'
import styles from './Display.module.css'

const Display = ({calVal}) => {
  return (
    <div>
        <input className={styles.display} type="text" value={calVal} readOnly/>
    </div>
  )
}

export default Display