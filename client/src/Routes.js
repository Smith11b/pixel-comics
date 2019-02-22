import React from "react";
import { Redirect, Route } from "react-router-dom";
import Accounts from "./Accounts";
import Auth from "./Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./Home";

function Routes({
  handleLogin,
  handleSignup,
  handleUsernameChange,
  handlePasswordOnChange,
  toggleShowLogin,
  toggleShowSignup,
  showLogin,
  showSignup,
  username,
  password
}) {
  return (
    <div>
      <Route
        exact
        path="/"
        component={props => (
          <Auth
            username={username}
            password={password}
            showLogin={showLogin}
            showSignup={showSignup}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            handleUsernameChange={handleUsernameChange}
            handlePasswordOnChange={handlePasswordOnChange}
            toggleShowSignup={toggleShowSignup}
            toggleShowLogin={toggleShowLogin}
            {...props}
          />
        )}
      />
      <ProtectedRoute path="/account" component={Accounts} />
      <ProtectedRoute path="/home" component={Home} />
    </div>
  );
}

export default Routes;
