import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SelectMenu from "./selectMenu";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return false;
    this.doSubmit();
  };

  validate = () => {
    let options = { abortEarly: false };
    let { error } = Joi.validate(this.state.data, this.schema, options);
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

    let data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton(label) {
    return (
      <div className="form-group">
        <button disabled={this.validate()} className="btn btn-primary">
          {label}
        </button>
      </div>
    );
  }
  renderInputField(name, label, type = "text") {
    let { data, errors } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        name={name}
        value={data[name]}
        label={label}
        type={type}
        error={errors[name]}
      />
    );
  }
  renderSelectMenu(name, label, items) {
    let { data, errors } = this.state;
    return (
      <SelectMenu
        onChange={this.handleChange}
        name={name}
        value={data[name]}
        label={label}
        error={errors[name]}
        items={items}
      />
    );
  }
}

export default Form;
