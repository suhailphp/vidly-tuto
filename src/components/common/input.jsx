import React from "react";

const Input = ({ label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="{id}">{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
