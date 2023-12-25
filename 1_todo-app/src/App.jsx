import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AddItem from './components/AddItem'

import TodoItems from './components/tODOiTEMS.JSX'
import TodoItem from './components/TodoItem'

function App() {
  const todoItems = [{
    name:'Goto School',
    dueDate:'2024'
  },
{
  name: 'Do assignment',
  dueDate:'2023/12/31'
}]
return (
<center className='todo-container'>
    <h1>TODO-LIST</h1>
      <AddItem></AddItem>
      <TodoItems todoItems={todoItems}></TodoItems>
      </center>

  )
}

export default App
