import React, { FormEvent, useRef, useState } from 'react'

const Form = () => {
    type formData={
        name:string;
        email:string;
        password:string;
    }
    const [submitedData, setSubmitedData] = useState<formData>({
        name:"",
        email:"",
        password:"",
    });
    const name=useRef<HTMLInputElement>(null);
    const email=useRef<HTMLInputElement>(null);
    const password=useRef<HTMLInputElement>(null);
    const handelSubmit=(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const nameVal = name.current!.value;
      const emailVal = email.current!.value;
      const passwordVal = password.current!.value;

      setSubmitedData({
        name: nameVal,
        email: emailVal,
        password: passwordVal,
      });

      console.log(nameVal);
      console.log(emailVal);
      console.log(passwordVal);
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input ref={name} type="text" placeholder='Enter Your Name'/>
            <input ref={email} type="email" placeholder='Enter Your Email'/>
            <input ref={password} type="password" placeholder='Enter Your Password'/>
            <button type='submit'>Submit</button>
        </form>
        <section>
            <h1>Name: {submitedData.name}</h1>
            <h1>Email: {submitedData.email}</h1>
            <h1>Password: {submitedData.password}</h1>
        </section>
    </div>
  )
}

export default Form