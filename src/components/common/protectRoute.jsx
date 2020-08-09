import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";

const ProtectRoute = ({ path, Component: component, render, ...rest }) => {
  let user = getCurrentUser();
  return (
    <Route
      path="{path}"
      {...rest}
      render={(props) => {
        if (!user) return <Redirect to="/login" />;
        return component ? <component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectRoute;
