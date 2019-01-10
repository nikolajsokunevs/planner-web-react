import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

class LogoutComponent extends Component {
  state = {};

  doLogout() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  render() {
    return (
      <button className="logout" onClick={this.doLogout}>
        Log out
      </button>
    );
  }
}

export default LogoutComponent;
