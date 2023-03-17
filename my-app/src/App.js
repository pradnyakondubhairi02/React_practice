import React, { useState } from "react";
import Body from "./compo/Body";
import Contact from "./compo/Contact";

export default function App(){

  const [click,setClick] = useState('world');
  // consr [color,setColor] = useState('blue');

  function update(){
    setClick("user")

  }


  return(

   <div>
     <h1 className="text-center">Hello {click}</h1>

     <button onClick={update} style={{backgroundColor:"red"}} className="ms-5">Update Me</button>

    <div className="d-flex flex-row">
    <Body name="pradnya" age="22" specification="Engineer"/>
     <Body name="pradnya" age="22" specification="Engineer"/>
    </div>

    <div className="d-flex flex-row">
    <Body name="pradnya" age="22" specification="Engineer"/>
     <Body name="pradnya" age="22" specification="Engineer"/>
    </div>

    {/* <h4 className="text-center mt-5">Contact Form</h4> */}
    <div className="mt-5"></div>
<Contact />
   </div>

    
  )
}