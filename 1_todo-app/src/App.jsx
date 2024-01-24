import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddItem from './components/AddItem.jsx'
import TodoItems from './components/tODOiTEMS.JSX'
import ErrorMessage from './ErrorMessage.jsx'

function App() {
  
  const InitialtodoItems = []

const [todoItem, setToDoItems] =useState(InitialtodoItems)
const handleNewItem = (ItemName, DueDate)=>{
  const newItems = [...todoItem, {name: ItemName, dueDate: DueDate}]
  setToDoItems(newItems)
}
const handleDltClick = (toDoItemName)=>{
  const newToDoItems = todoItem.filter((item)=> item.name !== toDoItemName)
  setToDoItems(newToDoItems)
  
}

return (
<center className='todo-container'>
    <h1>TODO-LIST</h1>
      <AddItem handleAddItem = {handleNewItem  }></AddItem>
      {todoItem.length===0 && <ErrorMessage></ErrorMessage>}
      <TodoItems todoItems={todoItem}
      handleDlthandle = {handleDltClick} ></TodoItems>
      </center>

  )
}

export default App
