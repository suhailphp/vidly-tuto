import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    errors: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      console.log(errors);
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
    return Object.keys(errors).length === 0 ? null : errors;
  };
  vadiateProperty = (input) => {
    if (input.value.trim() === "") {
      return input.name + " is required";
    } else return null;
  };
  handleChange = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    let errorMessage = this.vadiateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    let { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="userName"
            value={account.userName}
            label="User Name"
            error={errors.userName}
          />

          <Input
            onChange={this.handleChange}
            name="password"
            value={account.password}
            label="Password"
            type="password"
            error={errors.password}
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
