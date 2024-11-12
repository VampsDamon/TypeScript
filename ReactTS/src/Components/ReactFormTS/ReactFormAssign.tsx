import React, { FormEvent, useRef, useState } from 'react'

const ReactFormAssign = () => {
  return (
    <div>
{/* <FocusInput/> */}
{/* <DiffEvents/> */}
<ContactForm/>
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


const ContactForm=()=>{
  const name=useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const msg = useRef<HTMLTextAreaElement>(null);
  
  type contactFormDataType={
    name:string,
    email:string,
    msg:string,
  }

  const [contactFromData, setContactFromData] = useState<contactFormDataType[]>([]);

  const handleFormSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
     const n=name.current!.value;
     const e=email.current!.value;
     const m=msg.current!.value;

     setContactFromData((prev)=>[...prev,{
      name:n,
      email:e,
      msg:m
     }])
  }



  return <>
   <h1>Contact Form</h1>
   <form onSubmit={handleFormSubmit} >
    <input type="text" ref={name} placeholder='Your name' />
    <br/>
    <br/>
    <input type="email" ref={email} placeholder='Your Email' />
    <br/>
    <br/>
    <textarea placeholder='Enter your Message' ref={msg} rows={8} cols={22} />
    <br/>
    <br/>
    <button type="submit">Contact Me</button>
   </form>
   <section>
    <h2>Contact Request</h2>
    {
      contactFromData.map((contact)=>{
        return (
          <>
            <h3>Requested From : {contact.name} ({contact.email}) </h3>
            <p>{contact.msg}</p>
          </>
        );
      })
    }
   </section>
  </>
}

export default ReactFormAssign