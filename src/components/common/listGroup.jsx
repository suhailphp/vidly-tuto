import React from "react";

const ListGroup = ({
  lists,
  selectedID,
  onClick,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {lists.map((list) => (
        <li
          key={list[valueProperty]}
          className={
            selectedID === list[valueProperty]
              ? "list-group-item active"
              : "list-group-item "
          }
          style={{ cursor: "pointer" }}
          onClick={() => onClick(list[valueProperty])}
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

export default ListGroup;
