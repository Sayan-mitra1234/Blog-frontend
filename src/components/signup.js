import React from "react";
import { Link } from "react-router-dom";
import './sign.css'

function Signup(){
    return(
        <>
            <h1>Sign up</h1>
            <label>Email:</label>
            <input type="email" placeholder="enter your email" className="input1"/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="enter your password" className="input2"/>
            <br/>
            <label>Confirm Password:</label>
            <input type="password" placeholder="enter your password" className="input2"/>
            <br/>
            <button><Link to='/'>Signup</Link></button>
        </>
    )
}

export default Signup