import React from 'react'
import styles from './ButtonsContainer.module.css'

const ButtonsContainer = () => {
    const buttonNames = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={styles.btnContainer}>
        {buttonNames.map(Item=><button className={styles.button}>{Item}</button>)}
        
        
        
    </div>
  )
}

export default ButtonsContainer