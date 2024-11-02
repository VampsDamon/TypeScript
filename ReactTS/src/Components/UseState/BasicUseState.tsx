import React, { useState } from 'react'

interface UserFace {
  id: number;
  userName: string;
  lastName: string;
  hobby: string[];
}
const BasicUseState = () => {
  // const [count, setCount] = useState<number>(0);
  
  const [user, setUser] = useState<UserFace>({
    id:1,
    userName:"Shahid",
    lastName:"Khan",
    hobby:["Cricket","Sc-fi Movies","Songs"]
  });
  return (
    <div>
      {/* <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button> */}
       {/* <User user={user}/> */}
       <TODOS/>
    </div>
  );
}

const User =({user}:{user:UserFace})=>{
  const {userName,lastName,id,hobby}=user
  return (
    <div>
      <h2>{userName}</h2>
      <h2>{lastName}</h2>
      {
        hobby.map(h=><p>{h}</p>)
      }
    </div>
  )
}

const TODOS=()=>{
  type Todo={
    id:number;
    title:string;
    description:string;
  }
  const [todos, setTodos] = useState<Todo[]>([{
    id:1,
    title:"TODO 1",
    description:"This is TODO 1"
  }]);
  const addTodoHandler=()=>{
    setTodos((prev)=>{
    return  [...prev, { id: todos.length + 1, title: `TODO ${todos.length + 1}`, description:`This is TODO ${todos.length + 1}`}];
    })
  }
  return(<div>
    <div className="todoForm">
    <h1>ADD TODOs</h1>
    <button
    onClick={addTodoHandler}
    >ADD TODO</button>
    </div>
    <div>
      <h1>ALL TODOs</h1>
      {
        todos.map((todo:Todo)=>(<>
            <h2>{todo.title}</h2>
            <p><i>{todo.description}</i></p>
        </>))
      }
    </div>
  </div>)
}

export default BasicUseState