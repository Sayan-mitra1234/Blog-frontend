import React from "react";
import './sign.css'
import { Link } from "react-router-dom";
function Sign(){
    return(
        <>
            <h1>Login</h1>
            <label>Email:</label>
            <input type="email" placeholder="enter your email" className="input1"/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="enter your password" className="input2"/>
            <br/>
            <input className="radio" type="radio"/><label >Remember me?</label>
            <br/>
            <button>Log-in</button>
            <p className="forgot">Forgot Password?</p>
            <p>Need an Account<Link to="/signup"> Signin</Link></p>

        </>
    )
}

export default Sign