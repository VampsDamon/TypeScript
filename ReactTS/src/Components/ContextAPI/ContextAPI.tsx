import React, { useContext } from 'react'
import MyContext, { MyContextProvider } from './context/Mycontext'

const ContextAPI = () => {
    const context=useContext(MyContext)
      if (!context) {
        throw new Error("MyComponent must be used within a MyContextProvider");
      }

      const {value,setValue}=context;
  return (
    

    <div>
    <p>Value: {value}</p>
    <input type="text" name="" id="" onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default ContextAPI