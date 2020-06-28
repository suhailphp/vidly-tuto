import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={this.props.liked === true ? "fa fa-heart" : "fa fa-heart-o"}
      ></i>
    );
  }
}

export default Like;
