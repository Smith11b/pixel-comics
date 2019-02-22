import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default ProtectedRoute;
