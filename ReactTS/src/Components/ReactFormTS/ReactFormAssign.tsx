import React, { useRef } from 'react'

const ReactFormAssign = () => {
  return (
    <div>
{/* <FocusInput/> */}
<DiffEvents/>
    </div>
  )
}

const FocusInput=()=>{
   const f=useRef<HTMLInputElement>(null)
   return (
    <div>
      <h1>Focus on Input</h1>
     <input type="text" ref={f} />
     <button onClick={()=>f.current?.focus()}>Focus</button>
    </div>
   )
}

const DiffEvents=()=>{
  const h1tag=useRef<HTMLHeadingElement>(null);
  const btntag=useRef<HTMLButtonElement>(null);
  const ptag=useRef<HTMLParagraphElement>(null);
  const h1Handler = () => {
    console.log(h1tag.current)
  };
  const btnHandler = () => {
    console.log(btntag.current);
  };
  const pHandler = () => {
   console.log(ptag.current);
  };
  return (
    <div>
      <h1  onClick={h1Handler} ref={h1tag}>Hello</h1>
      <button onClick={btnHandler} ref={btntag}>Hello</button>
      <p onClick={pHandler} ref={ptag}>Hello</p>
    </div>
  );
}

export default ReactFormAssign