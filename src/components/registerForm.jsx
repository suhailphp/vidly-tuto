import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { registerUser } from "../services/userService";
import { toast } from "react-toastify";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  };
  doSubmit = async () => {
    try {
      await registerUser(this.state.data);
      toast.success("User Registered");
      this.props.history.replace("/login");
    } catch (error) {
      let errors = { ...this.state.errors };
      errors.email = error.response.data;
      this.setState({ errors });
      toast.error(error.response.data);
    }
  };
  render() {
    return (
      <div>
        <h1>Resgister</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("name", "Name")}
          {this.renderInputField("email", "Email")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
