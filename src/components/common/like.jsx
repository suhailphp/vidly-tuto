import React from "react";

const Like = ({ liked, onClick }) => {
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={liked === true ? "fa fa-heart" : "fa fa-heart-o"}
    ></i>
  );
};

export default Like;
