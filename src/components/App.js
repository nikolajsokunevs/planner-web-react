import React, { Component } from "react";
import Login from "./Login";
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
        <Login />
        <button
          className="btn btn-secondary m-2"
          onClick={this.navigateToRegistrationPage}
        >
          Create Account
        </button>
      </div>
    );
  }
}

export default App;
