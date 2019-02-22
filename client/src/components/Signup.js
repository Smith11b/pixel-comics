import React from 'react'

function Signup(props) {
  return (
    <div>
    <input onChange = {props.usernameOnChange} placeholder = "username"/>
      <input onChange = {props.passwordOnChange} placeholder = "password"/>
      
    </div>
  )
}

export default Signup
