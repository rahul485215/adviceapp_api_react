import React, { useState } from 'react'
import CountMessage from './CountMessage'
import './App.css'


const App = () => {
  const [advice, setAdvice] = useState('Please click the Button to Get Advice')
  const [count,setCount] = useState(0)

 const getAdvice = async() =>{
  const response =await fetch("https://api.adviceslip.com/advice")
  const data= await response. json()
  setAdvice(data.slip.advice);
  setCount((e)=> e+1)
 }

  return (
    <div className="container">
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
       <CountMessage count={count} />
      </div>
  )
}



export default App