import { createSlice } from "@reduxjs/toolkit"; 

export type CountState={count:number};

const initialState:CountState={
    count:0
}

const countSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state:CountState)=>{
           state.count+=1;
        },
        decrement:(state:CountState)=>{
           state.count-=1;
        },
    }
})

export const {increment,decrement}=countSlice.actions;

export default countSlice.reducer;