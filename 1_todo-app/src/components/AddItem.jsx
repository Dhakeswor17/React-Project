/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import { SiAddthis } from "react-icons/si";


const AddItem = ({ handleAddItem }) => {
  const [addNewToDoList, setAddNewToDoList] = useState("")
  const [addDueDate, setAddDueDate] = useState('')

  const handleAddToList = (event) => {
    const value = event.target.value
    setAddNewToDoList(value)

  }
  const handleAddDueDate = (event) => {
  
    setAddDueDate(event.target.value)

  }
  const handleAddButtonClick=()=>{
    if(addNewToDoList==='' || addDueDate===''){
      alert('Please fill both fields')
      
    }else{
      handleAddItem(addNewToDoList, addDueDate)
    setAddNewToDoList(' ')
    setAddDueDate(' ')
    }
    
  }
  return (
 
 <div>
      <div className="container">
        <form className="row kg-row btn-add">
          <div className="col-6">
            <input type="text" placeholder='Enter todo list'
              onChange={handleAddToList} 
              value={addNewToDoList}
            />
          </div>
          <div className="col-4">
            <input type="date"
              onChange={handleAddDueDate} 
              value={addDueDate}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-btn_add"
              onClick={handleAddButtonClick}
            ><SiAddthis/></button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddItem