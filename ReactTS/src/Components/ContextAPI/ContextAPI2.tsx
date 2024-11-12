import React, { useContext } from 'react'
import { CountContext } from './context/CountContext'

const ContextAPI2 = () => {
    const {count,increment,decrement}=useContext(CountContext)
  return (
    <div>
      <button onClick={()=>decrement()}>-</button>
      <h2> COUNT : {count}</h2>
      <button onClick={()=>increment()}>+</button>

    </div>
  )
}


export default ContextAPI2