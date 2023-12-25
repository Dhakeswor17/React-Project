import React from 'react'

const AddItem = () => {
  return (
    <div>
        <div class="container">
        <div class="row kg-row btn-add">
        <div class="col-6">
          <input type="text" placeholder='Enter todo list' />
        </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2"> 
          <button type="button" class="btn btn-success kg-btn">Add</button>
          </div>
        </div>
       
        </div>
    </div>
  )
}

export default AddItem