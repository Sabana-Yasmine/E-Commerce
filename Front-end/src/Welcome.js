import React from 'react';
import {useNavigate} from "react-router-dom"


function Welcome() {
    const navigate = useNavigate()
   
    return (
       <>
      <h1> Get Started ...</h1>
      <p>already have account ?</p>
      <a href="" onClick={()=> navigate("/signin")}>
                          Login  
                        </a>
       </>
    );
}

export default Welcome;