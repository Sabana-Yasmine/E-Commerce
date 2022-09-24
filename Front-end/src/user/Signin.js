import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

function Signin(props) {

    const navigate = useNavigate();

    const[email, setemail] = useState();
    const[pass, setpass] = useState();

    const login = async() => {
        //console.log(e.target.value)

        await axios.post("http://localhost:402/user/userlogin",{email,pass})
            .then((res) => {
                console.log(res)
                console.log("token", res.data.data.jwttoken);
                localStorage.setItem("token",res.data.data.jwttoken);
            alert("Successfully login")
              navigate("/product")
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <div className='container my-5'>
                <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p4'>
                    <h2 className='text-left'>Login</h2>
        <form>
            <div className='  mb-3 mt-3'>
                <label htmlFor=' email' className='form-label'>
                    Email
                </label>
                <input type="email" className ="form-control" name='email'
                onChange={(e)=>setemail(e.target.value)} required/>
            </div>

            <div className='  mb-3 mt-3'>
                <label htmlFor=' pasword' className='form-label'>
                    Password
                </label>
                <input type="password" className ="form-control" name='pass'
                onChange={(e)=>setpass(e.target.value)} required/>
            </div>

            <div>
            <button type="button" className="registerButton" onClick={login}>Submit</button>
            </div>
        </form>
    </div>
   </div>
</div>
    );
}

export default Signin;