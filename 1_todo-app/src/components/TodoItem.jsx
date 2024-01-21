/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TodoItem = ({todoName, todoDate, handleDlthandle}) => {
    
  return (
    <div>
    <div className="row kg-row">
   <div className="col-6">{todoName}</div>
     <div className="col-4">{todoDate} </div>
     <div className="col-2">
     <button type="button" className="btn btn-danger kg-btn" onClick={() => handleDlthandle(todoName)}>Delete</button>
     </div>
     </div>
</div>
  )
}

export default TodoItem