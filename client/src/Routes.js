import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";

function Routes(props) {
  return (
    <div>
      <Route
        path="/"
        render={props => (
          <Auth
            {...props}
            handleLogin={props.handleLogin}
            handleSignup={props.handleSignup}
            handleUsernameChange = {props.handleUsernameChange}
            handlePasswordOnChange = {props.handlePasswordOnChange}
            toggleShowSignup = {props.toggleShowSignup}
            toggleShowLogin = {props.toggleShowSignup}
          />
        )}
      />
      <Route path="/account" />
    </div>
  );
}

export default Routes;
