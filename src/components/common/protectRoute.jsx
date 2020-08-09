import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";

const ProtectRoute = ({ path, component: Component, render, ...rest }) => {
  let user = getCurrentUser();
  return (
    <Route
      path="{path}"
      {...rest}
      render={(props) => {
        if (!user) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectRoute;
