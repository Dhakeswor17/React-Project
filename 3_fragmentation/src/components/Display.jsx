import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import styles from './DisplayItem.module.css'

const Display = () => {
  const BuyItem = [
    'Milk',
    'Sugar',
    'Pen',
    'Rice',
    'Noodles',
    'Bread',
    'sweets'
  ]
  return (
    <div className={styles.display}>
        <ul className="list-group">
          {BuyItem.map(item=><li class="list-group-item" key={item}>{item}<button type="button" 
          className= {`${styles.btn} btn btn-info`}>rem</button></li>)}
  
</ul>
     
    </div>
  )
}

export default Display