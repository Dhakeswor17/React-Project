import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'
import styles from './DisplayItem.module.css'


const Display = ({items}) => {
  
  return (
    
    <div className={styles.display}>
       <ul className="list-group">
          {items.map(item=><li className="list-group-item" key={item}>{item}<button type="button" 
          className= {`${styles.btn} btn btn-info`}>Buy</button></li>)}
  
</ul>
     
    </div>
  )
}

export default Display