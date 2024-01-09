import React from 'react'
import styles from './Additem.module.css'
import  'bootstrap/dist/css/bootstrap.css'

const AddItems = () => {
  return (
    <div>
      <input type='text' placeholder='Please add product' className= {styles.addItems}>

      </input>
    </div>
  )
}

export default AddItems