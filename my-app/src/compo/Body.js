import React  from "react"
// import { GlobalInfo } from "../App";
// import SuperChild from "./SuperChild";

export default function Body(props) {
  // const {appColor} = useContext(GlobalInfo)
  return (

<div style={{backgroundColor:"pink"}} className="shadow-lg rounded p-5 w-50 text-white mt-5 text-center mx-5">

     <h2 >hey I am {props.name}</h2>
     <h3>AGE: {props.age}</h3>
     <h3>I am an {props.specification}</h3>
     {/* <SuperChild /> */}
    </div>

  );
}