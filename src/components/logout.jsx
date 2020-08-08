import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    this.props.history.replace("/");
  }
  render() {
    return null;
  }
}

export default Logout;
