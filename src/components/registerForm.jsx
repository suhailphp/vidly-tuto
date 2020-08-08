import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { userName: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    userName: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().required(),
  };
  doSubmit = () => {
    console.log("Submitted");
  };
  render() {
    return (
      <div>
        <h1>Resgister</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("userName", "User Name")}
          {this.renderInputField("password", "Password", "password")}
          {this.renderInputField("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
