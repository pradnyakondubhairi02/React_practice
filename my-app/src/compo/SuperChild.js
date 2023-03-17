import React,{useContext} from "react";
import { GlobalInfo } from "../App";

export default function SuperChild(){
    const {appColor} = useContext(GlobalInfo)
    return(
        <h1 style={{backgroundColor:"black"}}>I am Super child</h1>
    )
}