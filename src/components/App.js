import React, { Component } from "react";
import logo from "../logo.png";
import "../App.css";
import FormLogin from "./FormLogin";
import CreateAccountComponent from "./CreateAccountComponent";
import ReactDOM from "react-dom";

class App extends Component {
  navigateToRegistrationPage() {
    ReactDOM.render(
      <CreateAccountComponent />,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Best Planner Ever!</h2>
        </div>
        <FormLogin />
        <button onClick={this.navigateToRegistrationPage}>
          Create Account
        </button>
      </div>
    );
  }
}

export default App;
