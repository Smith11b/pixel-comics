import React from "react";
import { Route } from "react-router-dom";

import Auth from "./Auth";

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
          />
        )}
      />
      <Route path="/account" />
    </div>
  );
}

export default Routes;
