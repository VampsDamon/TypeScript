import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootStoreState } from './Store/store'
import { useSelector } from 'react-redux';
import { decrement, increment } from './Slices/countSlice';



const Redux = () => {
    const dispatch=useDispatch<AppDispatch>();
    const count = useSelector((state: RootStoreState) => state.counter.count);
     
  return (
    <div>
     <h3>Count : {count}</h3>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Redux