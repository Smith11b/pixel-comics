import React from "react";

function Signup(props) {
  return (
    <div>
      <input
        value={props.username}
        onChange={props.usernameOnChange}
        placeholder="username"
      />
      <input
        value={props.password}
        onChange={props.passwordOnChange}
        placeholder="password"
      />
      <button onClick = {props.handleSubmit} >Signup</button>
    </div>
  );
}

export default Signup;
