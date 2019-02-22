import React, { Component } from "react";
import Nav from "./components/Nav";
import Routes from "./Routes";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      fileInput: null,
      images: null,
      token: null,
      showLogin: false,
      showSignup: false
    };
  }

  handleLogin = () => {
    axios
      .post("/auth/login", {
        username: this.username,
        password: this.password
      })
      .then(res => this.setState({ token: res.data[0].token }));
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
