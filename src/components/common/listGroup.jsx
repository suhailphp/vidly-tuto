import React from "react";

const ListGroup = ({ lists, selectedID, onClick }) => {
  return (
    <ul className="list-group">
      {lists.map((list) => (
        <li
          key={list._id}
          className={
            selectedID === list._id
              ? "list-group-item active"
              : "list-group-item "
          }
          style={{ cursor: "pointer" }}
          onClick={() => onClick(list._id)}
        >
          {list.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
