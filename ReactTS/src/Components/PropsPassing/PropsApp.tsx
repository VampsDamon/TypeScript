import React from 'react'
import Button from './Button'
const PropsApp = () => {
  return (
    <div>
      <Button label="Click Me" onClick={()=>alert("Button Clicked")}  disable={false}/>
      
    </div>
  )
}

export default PropsApp