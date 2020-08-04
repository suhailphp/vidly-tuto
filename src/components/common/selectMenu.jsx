import React from "react";

const SelectMenu = ({
  name,
  label,
  error,
  options,
  onChange,
  value,
  valueProperty,
}) => {
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
          <option key={option[valueProperty]} value={option[valueProperty]}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectMenu.defaultProps = {
  valueProperty: "genreID",
};

export default SelectMenu;
