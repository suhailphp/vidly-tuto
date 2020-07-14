import React from "react";

const Input = ({ label, name, value, onChange, error, type }) => {
  return (
    <div className="form-group">
      <label htmlFor="{id}">{label}</label>
      <input
        className="form-control"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Input.Input = {
  type: "text",
};
export default Input;
