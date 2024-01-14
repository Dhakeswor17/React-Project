import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import AddItems from './components/addItems'
import ErrorMessage from './components/ErrorMessage'


function App() {
   
  const [textState, setTextState] = useState('')
  const [BuyItem, setBuyItem]=useState([])
  const[activeItem, setActiveItem]= useState([])
  
  const handleOnKeyDown = (event)=>{
    if(event.key === 'Enter')
    {
    let userAddValue = (event.target.value)
    event.target.value='';
    let newArray = [...BuyItem, userAddValue]
    setBuyItem(newArray)
  }
 
}
const handleClickBtn =()=>{
  let boughItem = [...activeItem, BuyItem]
  setActiveItem(boughItem)

}
 return (<>
 <h1>What do you want to buy</h1>
  <AddItems changeItem = {handleOnKeyDown } ></AddItems>
  <ErrorMessage product= {BuyItem}></ErrorMessage>
    <Display items={BuyItem}
    bought={activeItem.includes(BuyItem)}
    handleBuyButton = {()=>handleClickBtn(BuyItem)}
    
 ></Display>  
    </>
  )
}

export default App
