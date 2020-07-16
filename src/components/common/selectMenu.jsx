import React from "react";

const SelectMenu = ({ name, label, error, items, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="{id}">{label}</label>
      <select
        className="custom-select custom-select-lg mb-3"
        name={name}
        id={name}
      >
        {items.map((item) => (
          <option key={item._id} value={item}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
