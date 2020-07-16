import React from "react";
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
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("userName", "User Name")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
