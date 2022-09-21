import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register(props) {
const navigate =useNavigate();
 const[user, setUser] = useState({
    username : "",
    email : "",
    password : ""

 })   

 const handleChange = (e) =>{
    console.log(e.target.value)
    const{name, value} = e.target

    setUser({
        ...user,//spread operator
        [name]:value
    })
    console.log("user",user)

 }

 const handleSubmit = ()=> {
    const{username, email, password, role} = user
    if(username && email && password && role){
        console.log("user",user);
        axios({
            method : 'post',
            url : 'http://localhost:402/user/Register',
            data : user
        }).then((res) =>{
            console.log(res.data.message)
            alert("user register successfully please login")
            navigate("/signin")

        }).catch((err) =>{
            console.log("err", err)
        })
    }else{
        alert("please enter all values")
    }
 }
    return (
        <div className="col-md4-container">
             <div className=" col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 p-4">
            <h1 className="text-left">Register Form</h1>
            
            <div className="mb-3 mt-3">
            <label htmlfor="username" className="form-label">username</label>
            <input type="text" class="form-control" name='username' value = {user.username} onChange={handleChange}/>
            </div>

            <div className="mb-3 mt-3">
            <label htmlfor="email" className="form-label">email</label>
            <input type="email" class="form-control" name='email' value = {user.email} onChange={handleChange}/>
            </div>

            <div className="mb-3 mt-3">
            <label htmlfor="role" className="form-label">Role</label>
            <input type="text" class="form-control" name='role' value = {user.role} onChange={handleChange}/>
            </div>

            <div className="mb-3 mt-3">
            <label htmlfor="passwword" className="form-label">password</label>
            <input type="password" class="form-control" name='password' value = {user.password} onChange={handleChange}/>
            </div>

            <div>
            <button htmlfor="" className="btn btn-primary" onClick={handleSubmit}>submit</button>
            </div>
            </div>
            </div>
    );
}

export default Register;