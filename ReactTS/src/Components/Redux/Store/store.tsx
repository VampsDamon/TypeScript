import { configureStore } from "@reduxjs/toolkit";

import countReducer from "../Slices/countSlice"

const store=configureStore({
    reducer:{
        counter:countReducer
    }
});


export type RootStoreState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;


export default store;