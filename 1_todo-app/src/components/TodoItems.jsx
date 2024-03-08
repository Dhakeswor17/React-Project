/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import TodoItem from './TodoItem'

import { TodoItemContext } from '../store/todo-items-store'

const TodoItems = ({ handleDlthandle}) => {
  const todoItems = useContext(TodoItemContext)
  
  return (
    <div>
        {todoItems.map((item)=> (
        
        <TodoItem todoDate={item.dueDate} 
        todoName = {item.name} key={item.dueDate}
         handleDlthandle= {handleDlthandle}></TodoItem>
        
        ))}
        
    </div>
    
  )
}

export default TodoItems