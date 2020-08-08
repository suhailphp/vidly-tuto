import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { login } from "../services/userService";
import { toast } from "react-toastify";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Passowrd"),
  };

  doSubmit = async () => {
    try {
      await login(this.state.data.email, this.state.data.password);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("email", "Email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
