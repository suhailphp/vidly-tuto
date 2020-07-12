import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              id="userName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
