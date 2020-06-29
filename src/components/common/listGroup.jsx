import React from "react";

const ListGroup = ({
  lists,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {lists.map((list) => (
        <li
          key={list[valueProperty]}
          className={
            list === selectedItem
              ? "list-group-item active"
              : "list-group-item "
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(list)}
        >
          {list[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
//this is for setting default Props values

export default ListGroup;
