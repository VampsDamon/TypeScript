"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Generic_1 = __importDefault(require("./Generic"));
try {
    // let a :number =2
    // console.log(19);
    // const func=(n:string,m:string):string=>{
    // return "UserName"
    //     return n+m
    // }
    // console.log(func("a","b"))
    (0, Generic_1.default)();
}
catch (error) {
    console.log(error instanceof Error ? error.message : error);
}
