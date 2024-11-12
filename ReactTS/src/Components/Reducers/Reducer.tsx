import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state,dispatch]=useReducer(reducer,{
    count:0
  })
  return <div>
    <h2>Count : {state.count}</h2>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
  </div>;
};

export default Reducer;
