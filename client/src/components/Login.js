import React from 'react'

function Login(props) {
  return (
    <div>
      <input value = {props.username} onChange = {props.usernameOnChange} placeholder = "username"/>
      <input value = {props.password} onChange = {props.passwordOnChange} placeholder = "password"/>
      <button onClick = {props.handleSubmit}>Login</button>
      
    </div>
  )
}

export default Login
