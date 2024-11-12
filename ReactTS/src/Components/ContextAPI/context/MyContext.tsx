import { Children, createContext, FC, ReactNode, useState } from "react";

type MyContextData={
    value:string,
    setValue:(newString:string)=>void;
}

 const MyContext=createContext<MyContextData|undefined>(undefined);

export const MyContextProvider:FC<{
    children:ReactNode
}>=({children})=>{
   

    const [value, setValue] = useState<string>("");

    const contextValue:MyContextData={
        value,
        setValue
    }

   return(
    <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>
   )
}


export default MyContext