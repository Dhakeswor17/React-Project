import React from 'react'

function Listitem() {
  return (
    <div>
         <div class="row kg-row">
        <div class="col-6">
          Milk
        </div>
          <div class="col-4">
          07/12/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">Delete</button>
          </div>
          </div>
          <div class="row kg-row">
        <div class="col-6">
          Go to Collage
        </div>
          <div class="col-4">
          1 7/12/2023
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">Delete</button>
          </div>
          </div>
    </div>
  )
}

export default Listitem