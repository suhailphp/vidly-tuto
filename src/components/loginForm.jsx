import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitd");
  };
  handleChange = ({ currentTarget: input }) => {
    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    let { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="userName"
            value={account.userName}
            label="User Name"
          />
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={account.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
