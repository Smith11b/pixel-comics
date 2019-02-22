import React, { Component } from "react";
import Nav from "./components/Nav";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fileInput: null,
      images: null,
      token: null,
      showLogin: false,
      showSignup: false
    };
  }

  handleLogin = () => {
    axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    });
  };

  handleSignup = () => {
    axios
      .post("/auth/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => this.setState({ token: res.data[0].token }))
      .catch(err => console.log(err.message));
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordOnChange = e => {
    this.setState({ password: e.target.value });
  };

  toggleShowLogin = () => {
    this.setState(ps => {
      return { showLogin: !ps.showLogin, showSignup: false };
    });
  };
  toggleShowSignup = () => {
    this.setState(ps => {
      return { showSignup: !ps.showSignup, showLogin: false };
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <Nav logout={this.logout} />
        <Routes
          {...this.state}
          handleLogin={this.handleLogin}
          handleSignup={this.handleSignup}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordOnChange={this.handlePasswordOnChange}
          toggleShowLogin={this.toggleShowLogin}
          toggleShowSignup={this.toggleShowSignup}
        />
      </div>
    );
  }
}

export default withRouter(App);
