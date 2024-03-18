/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { TodoItemContext } from '../store/todo-items-store';

const TodoItem = ({todoName, todoDate}) => {
  const { deleteItem } = useContext(TodoItemContext)
    
  return (
    <div>
    <div className="row kg-row">
   <div className="col-6">{todoName}</div>
     <div className="col-4">{todoDate} </div>
     <div className="col-2">
     <button type="button" className="btn btn-danger kg-btn" onClick={() => deleteItem (todoName)}>
     <RiDeleteBin6Line />
     </button>
     </div>
     </div>
</div>
  )
}

export default TodoItem