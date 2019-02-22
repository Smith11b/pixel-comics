import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup'

function Auth(props) {
    return (
        <div className = "auth-form">
            <h1>Pixel Comics</h1>
            <div>{props.showLogin ? <Login /> : props.showSignup ? <Signup /> : <div> </div>}</div>
            <button className= "login">Login</button>
            <button className = "signup">Signup</button>
            
        </div>
    )
}

export default Auth
