import React, { Component } from "react";

class HeaderComponent extends Component {
  state = {
    text: "Plan It"
  };
  render() {
    return (
      <div className="header">
        <h1>{this.state.text}</h1>
        <button className="logout">Log out</button>
      </div>
    );
  }
}

export default HeaderComponent;
