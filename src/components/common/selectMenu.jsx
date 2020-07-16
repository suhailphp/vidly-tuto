import React from "react";

const SelectMenu = ({ name, label, error, options, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor="{id}">{label}</label>
      <select
        className="custom-select custom-select-lg mb-3"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select One</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectMenu;
