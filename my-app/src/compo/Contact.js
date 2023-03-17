import React from "react";
import '../index.css'

export default function Contact(){
    return(
       <div>
        <div>
            <div className=" d-flex  justify-content-center text-align-center">
                <div className="border-1 text-center shadow-lg rounded w-50 p-4">
                    <h4 mb-5>Contact Form</h4>

                    
                    <div className="mt-4"></div>
<form
  action="https://formspree.io/f/xqkolveo"
  method="POST" className="d-flex flex-column gap-3 w-75  d-flex justify-content-center"
>
  <input type="text" name="name" placeholder="Username" required/>
  <input type="mail" name="mail" placeholder="Email" required/>

<textarea name="message" placeholder="Message"></textarea>

  <button type="submit" className="w-25 bg-primary m-auto">Send</button>
</form>
                    </div>
            </div>
        </div>
       </div>
    )
}

