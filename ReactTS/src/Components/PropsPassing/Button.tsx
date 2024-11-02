import React, { ReactEventHandler } from 'react'

type ButtonFace={
    label:string,
    disable:boolean,
    onClick:()=>void,
}

const Button = ({label,disable,onClick}:ButtonFace) => {
  return (
    <div>
      <button disabled={disable} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button