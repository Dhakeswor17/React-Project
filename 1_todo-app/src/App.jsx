import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AddItem from './components/AddItem.jsx'
import TodoItems from './components/tODOiTEMS.JSX'
import ErrorMessage from './ErrorMessage.jsx'
import { TodoItemContext } from './store/todo-items-store.jsx'

function App() {
  
  const InitialtodoItems = [] 

const [todoItem, setToDoItems] =useState(InitialtodoItems)
const addNewItem= (ItemName, DueDate)=>{
  const newItems = [...todoItem, {name: ItemName, dueDate: DueDate}]
  setToDoItems(newItems)
}
const deleteItem = (toDoItemName)=>{
  const newToDoItems = todoItem.filter((item)=> item.name !== toDoItemName)
  setToDoItems(newToDoItems)
  
}
// const defaultValue = [{ 
//   name:'Buy Ghee',
//   dueDate:'today'
// }]

return (
  <TodoItemContext.Provider value={{
    todoItem,
    addNewItem,
    deleteItem,
}}>
<center className='todo-container'>
    <h1>TODO-LIST</h1>
      <AddItem></AddItem>
      <ErrorMessage></ErrorMessage>
      <TodoItems ></TodoItems>
      </center>
      </TodoItemContext.Provider> 

  )
}

export default App
