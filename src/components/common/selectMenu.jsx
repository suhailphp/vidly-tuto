import React from "react";

const SelectMenu = ({ name, label, error, items, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor="{id}">{label}</label>
      <select
        className="custom-select custom-select-lg mb-3"
        name={name}
        id={name}
        onChange={onChange}
        defaultValue={value}
      >
        <option value="">Select One</option>
        {items.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectMenu;
