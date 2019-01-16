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
    event.preventDefault();
    services.createAccount({
      username: this.state.fields.username.value,
      password: this.state.fields.password.value
    });
  };

  navigateHome() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Create Account</h1>

        <legend>Account Information</legend>
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
                placeholder="username"
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
                placeholder="password"
                value={this.state.fields.password.value}
                onChange={this.handleUserInput}
              />
              <span className="circle">
                <span className="tick" />
              </span>
            </div>
            <div
              className="formSection_Item"
              title="Please re-enter your password"
            >
              <label>Confirm Password</label>
              <input
                type="password"
                name="PasswordConfirm"
                id="PasswordConfirm"
                required
                placeholder="Confirm Password"
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
