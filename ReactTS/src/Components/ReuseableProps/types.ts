export interface User{
    id:number,
    name:string,
    email:string
}

export interface AdminInfoList extends User{
   deleteAccess:boolean,
   writeAccess:boolean,
   readonlyAccess:boolean
}

