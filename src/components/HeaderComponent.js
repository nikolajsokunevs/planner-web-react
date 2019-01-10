import React, { Component } from "react";
import LogoutComponent from "./LogoutComponent";

class HeaderComponent extends Component {
  state = {
    text: "Plan It"
  };

  render() {
    return (
      <div className="header">
        <h1>{this.state.text}</h1>
        <LogoutComponent />
      </div>
    );
  }
}

export default HeaderComponent;
