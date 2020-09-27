import React, { Component, useState } from 'react';
import './register.css'
import { register } from '../services/auth';
const Register = () => {

    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [passward,setPassward]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    const click = async()=>{
        let data={
            'userName':userName,
            'email':email,
            'passward':passward
        }

        const res = await register(data)

        if(res.data.success){
            console.log("res ok");
            window.location.replace('/login')
        }
        else{
            var errorstring = "";
            res.data.errors.map(error => errorstring = errorstring + error + '\n\r');
      
            setErrorMessage(errorstring);
        }

    }
        return (
            <div style={{ border: "1px solid #ccc" }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>
                    {errorMessage}
                    <label>
                    <label for="psw-repeat"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required 
                    value={userName} onChange={(e)=>setUserName(e.target.value)}/>

                    
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required 
                         value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required 
                         value={passward} onChange={(e)=>setPassward(e.target.value)}/>


                        <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: "15px" }} /> Remember me
    </label>

                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn" onClick={()=>click()}>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }


export default Register;