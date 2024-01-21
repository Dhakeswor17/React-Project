/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems, handleDlthandle}) => {
  return (
    <div>
        {todoItems.map((item)=> (
        
        <TodoItem todoDate={item.dueDate} todoName = {item.name} key={item.dueDate} handleDlthandle= {handleDlthandle}></TodoItem>
        
        ))}
        
    </div>
    
  )
}

export default TodoItems