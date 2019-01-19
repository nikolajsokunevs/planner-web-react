import React, { Component } from "react";
import ReactDOM from "react-dom";
import services from "../api/services";
import {
  validation,
  validateFields,
  validateField
} from "../utils/validation/";
import App from "./App";

class CreateAccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: {
          value: "",
          mandatory: true,
          valid: true,
          validationType: validation.NOT_EMPTY
        },
        password: {
          value: "",
          mandatory: true,
          valid: true,
          validationType: validation.NOT_EMPTY
        },
        confirmPassword: {
          value: "",
          mandatory: true,
          valid: true,
          validationType: validation.NOT_EMPTY
        }
      }
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    let fields = this.state.fields;
    fields[name].value = value;
    validateField(fields[name]);
    this.setState({ fields: fields });
  };

  errorClass(error) {
    return error === true ? "" : "is-invalid";
  }

  doSignUp = event => {
    if (
      this.state.fields.password.value ===
      this.state.fields.confirmPassword.value
    ) {
      event.preventDefault();
      services.createAccount({
        username: this.state.fields.username.value,
        password: this.state.fields.password.value
      });
    }
  };

  navigateHome() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Create Account</h1>

        <div>
          <div>
            <div title="Username">
              <label>Username</label>
              <input
                type="username"
                className={`form-control ${this.errorClass(
                  this.state.fields.username.valid
                )}`}
                name="username"
                placeholder="Username"
                value={this.state.fields.username.value}
                onChange={this.handleUserInput}
              />
            </div>
            <div
              className="formSection_Item"
              title="Please enter your password"
            >
              <label>Password</label>
              <input
                type="password"
                className={`form-control ${this.errorClass(
                  this.state.fields.password.valid
                )}`}
                name="password"
                placeholder="Password"
                value={this.state.fields.password.value}
                onChange={this.handleUserInput}
              />
            </div>
            <div
              className="formSection_Item"
              title="Please re-enter your password"
            >
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={this.state.fields.confirmPassword.value}
                onChange={this.handleUserInput}
              />
            </div>
            <button name="Submit" onClick={this.doSignUp}>
              Register
            </button>
            <button name="Back" onClick={this.navigateHome}>
              Go Back
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateAccountComponent;
