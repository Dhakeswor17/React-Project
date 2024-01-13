import React, { useState } from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import styles from './DisplayItem.module.css'


const Display = ({items, bought, handleBuyButton}) => (
  <div className={`${styles.display}`}>
    <ul className="list-group active">
      {items.map(item => <li className={`list-group-item ${bought && 'active'}`} key={item}>{item}
        <button type="button"
          className={`${styles.btn} btn btn-info active`}
          onClick={handleBuyButton}
        >Buy</button></li>)}
    </ul>

  </div>
)

export default Display