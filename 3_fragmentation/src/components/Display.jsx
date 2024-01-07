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
    'Bread'
  ]
  return (
    <div className={styles.display}>
        <ul class="list-group">
          {BuyItem.map(item=><li class="list-group-item">{item}<button type="button" 
          className= {`${styles.btn} btn btn-info`}>Buy</button></li>)}
  
</ul>
     
    </div>
  )
}

export default Display