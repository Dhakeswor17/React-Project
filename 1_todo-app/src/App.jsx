import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading'
import AddItem from './components/AddItem'
import Listitem from './components/Listitem'

function App() {
return (
<center className='todo-container'>
      <Heading></Heading>
      <div className="item-container">
      <AddItem></AddItem>
      <Listitem></Listitem>
      </div>
    </center>

  )
}

export default App
