import { createContext, FC, ReactNode, useState } from "react";

type MyContextProps={
    count:number,
    increment:()=>void;
    decrement:()=>void;
}


export const CountContext=createContext<MyContextProps>({
    count:0,
    increment:()=>{},
    decrement:()=>{}
})


const CountContextProvider:FC<{children:ReactNode}>=({children})=>{
    const [count, setCount] = useState(0);

    const contextValue:MyContextProps={
         count,
         increment:()=>{
            setCount(count+1)
         },
         decrement:()=>{
            setCount(count-1)
         },
    }


    return<CountContext.Provider value={contextValue}>
        {children}
    </CountContext.Provider>
}


export default CountContextProvider;
