import React, { Component } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import axios from "axios";

export default class Auth extends Component {
  constructor(props) {
    super();
    this.state = { username: "", password: "" };
  }

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordOnChange = e => {
    this.setState({ password: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
  };
  render() {
    const props = this.props;
    return (
      <div className="auth-form">
        <h1 className="auth-header">Pixel Comics</h1>
        <div>
          {props.showLogin ? (
            <Login
              password={this.password}
              username={this.username}
              usernameOnChange={this.handleUsernameChange}
              passwordOnChange={this.handlePasswordOnChange}
              handleSubmit={this.handleLogin}
            />
          ) : props.showSignup ? (
            <Signup
              usernameOnChange={props.handleUsernameChange}
              passwordOnChange={props.handlePasswordOnChange}
            />
          ) : (
            <div> </div>
          )}
        </div>
        {props.showLogin === false && props.showSignup === false ? (
          <div>
            <button onClick={props.toggleShowLogin} className="auth-button">
              Login
            </button>
            <button onClick={props.toggleShowSignup} className="auth-button">
              Signup
            </button>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
