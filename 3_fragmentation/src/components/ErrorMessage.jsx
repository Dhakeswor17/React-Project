import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'

const ErrorMessage = ({product}) => {
    if(product.length == 0){
        return(
        <div className="badge bg-primary text-wrap" >
        Product should not be empty
      </div>
        )
    }
  
   
  
}

export default ErrorMessage