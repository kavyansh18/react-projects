import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] =useState(7)

  //let counter=5
  const addValue = ()=>{
    //counter= counter +1
    if(counter<8){
    setCounter(counter+1)}
    else{setCounter(18)}
  }

  const removeValue=()=>{
    //counter-=1
    if (counter>0){
      setCounter(counter -1 )
    }
    else{
    setCounter(0)}
  }
  return (
    <>
      <h1>Kavyansh {counter}</h1>
      <h2>Conter value: {counter}</h2>

      <button
      onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
