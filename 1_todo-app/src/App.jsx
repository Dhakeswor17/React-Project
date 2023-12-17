import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {


  return (

    <center className='todo-continer'>
      <h1>TODO APP</h1>
      <div class="container text-center">
        <div class="row">
        <div class="col-6">
          <input type="text" placeholder='Enter todo list' />
        </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
        <div class="row">
        <div class="col-6">
          Milk
        </div>
          <div class="col-4">
          07/12/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
          </div>
          <div class="row">
        <div class="col-6">
          Go to Collage
        </div>
          <div class="col-4">
          17/12/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
          </div>
        </div>
    </center>

  )
}

export default App
