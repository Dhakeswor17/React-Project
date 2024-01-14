
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {
  const [calVal, setCalVal]= useState('')
  
  const clickBtnHandle = (buttonText)=>{
    if(buttonText==='c'){
      setCalVal('')
    } else if(buttonText==='='){
      const result = eval(calVal)
      setCalVal(result)
    } else{
      const newValue = calVal+ buttonText
    setCalVal(newValue)
    }
    
  }


  return (
    <div className={styles.mainContainer}>
      <Display calVal= {calVal}></Display>
      <ButtonsContainer
      OnButtonClick = {clickBtnHandle}></ButtonsContainer>
    </div>
  )
}

export default App
