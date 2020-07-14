import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    errors: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.errors) {
      console.log(this.state.errors);
      return false;
    }
    console.log("Submitd");
  };
  validate = () => {
    let { account } = this.state;
    let errors = {};
    if (account.userName.trim() === "") {
      errors.userName = "UserName is required ";
    }
    if (account.password.trim() === "") {
      errors.password = "Password filed required ";
    }
    return errors;
  };
  handleChange = ({ currentTarget: input }) => {
    let account = { ...this.state.account };

    let errors = this.validate();
    console.log(errors);
    account[input.name] = input.value;
    this.setState({ account, errors });
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

          <Input
            onChange={this.handleChange}
            name="password"
            value={account.password}
            label="Password"
            type="password"
          />
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
