import React, { Component, useState } from 'react';
import { authenticate } from '../services/auth';

const Login = () => {

    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [passward, setPassward] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const click = async () => {
        let data = {
            'userNameOrEmail': userNameOrEmail,
            'passward': passward
        }
        console.log(data);
        const res = await authenticate(data);
        console.log(res);
        if (res.data.success) {
            localStorage.setItem("TOKEN", res.data.response.token);
            localStorage.setItem("USERID", res.data.response.userId);
            console.log("res ok");
            window.location.replace('/')
        }
        else {
            var errorstring = "";
            res.data.errors.map(error => errorstring = errorstring + error + '\n\r');

            setErrorMessage(errorstring);
        }
    }


    return (
        <div style={{ border: "1px solid #ccc" }}>
            <div className="container">
                {errorMessage}
                <label><b>Email Or Username</b></label>
                <input type="text" placeholder="Enter Email Or Username" name="uname" required
                    value={userNameOrEmail} onChange={(e) => setUserNameOrEmail(e.target.value)} />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    value={passward} onChange={(e) => setPassward(e.target.value)} />

                <button type="submit" onClick={() => click()}>Login</button>

            </div>


            <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                <button type="button" className="cancelbtnn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </div>
    );
}

export default Login;