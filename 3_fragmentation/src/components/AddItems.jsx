import React from 'react'
import styles from './Additem.module.css'
import  'bootstrap/dist/css/bootstrap.css'

const AddItems = ({changeItem}) => {
  
  return (
    <div>
      <input type='text' placeholder='Please add product'
       className= {styles.addItems}
       onKeyDown = {changeItem}
       >
  </input>
  
    </div>
  )
}

export default AddItems