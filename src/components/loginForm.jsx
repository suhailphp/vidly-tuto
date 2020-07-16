import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { userName: "", password: "" },
    errors: {},
  };
  schema = {
    userName: Joi.string().required().min(3).max(10).label("User Name"),
    password: Joi.string().required().label("Passowrd"),
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      //console.log(errors);
      return false;
    }
    console.log("Submitd");
  };
  validate = () => {
    let options = { abortEarly: false };
    let { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    let errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  vadiateProperty = ({ name, value }) => {
    let obj = { [name]: value };
    let schema = { [name]: this.schema[name] };
    let { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
