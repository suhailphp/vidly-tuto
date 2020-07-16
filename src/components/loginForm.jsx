import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { userName: "", password: "" },
    errors: {},
  };
  schema = {
    userName: Joi.string().required().min(3).max(10).label("User Name"),
    password: Joi.string().required().label("Passowrd"),
  };

  doSubmit = () => {
    console.log("Submitd");
  };

  render() {
    let { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            name="userName"
            value={data.userName}
            label="User Name"
            error={errors.userName}
          />

          <Input
            onChange={this.handleChange}
            name="password"
            value={data.password}
            label="Password"
            type="password"
            error={errors.password}
          />
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
