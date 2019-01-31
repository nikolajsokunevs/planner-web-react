import React, { Component } from "react";
import ReactDOM from "react-dom";
import services from "../api/services";
import {
  validation,
  validateFields,
  validateField
} from "../utils/validation/";
import App from "./App";
import BaseComponent from "./BaseComponent";

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
      },
      responseText: ""
    };
  }

  doSignUp = event => {
    event.preventDefault();
    const fields = this.state.fields;
    this.setState({ fields: validateFields(fields) });
    if (this.state.fields.username.value.length > 4) {
      this.callCreateAccountApi(event);
    }
  };

  callCreateAccountApi(event) {
    if (
      this.state.fields.password.value ===
      this.state.fields.confirmPassword.value
    ) {
      event.preventDefault();
      services
        .createAccount({
          username: this.state.fields.username.value,
          password: this.state.fields.password.value
        })
        .then(result => {
          console.log(result);
          this.state.responseText = result;
        });
    }
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

  render() {
    return (
      <form className="demoForm">
        <h1 className="form-signin-heading">Create Account</h1>

        <h2 />
        <div className={`form-group`}>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className={`form-control ${this.errorClass(
              this.state.fields.username.valid
            )}`}
            name="username"
            placeholder="username"
            value={this.state.fields.username.value}
            onChange={this.handleUserInput}
            autoFocus
          />
          <div className="invalid-feedback">
            Your username needs to be between 6 and 20 characters long and can
            only contain letters and numbers
          </div>
        </div>
        <div className={`form-group`}>
          <label htmlFor="password">Password</label>
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
          <div className="invalid-feedback">
            Your password needs to be between 6 and 20 characters long and
            contain at least one letter and one number
          </div>
        </div>
        <div className={"form-group"}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${this.errorClass(
              this.state.fields.confirmPassword.valid
            )}`}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={this.state.fields.confirmPassword.value}
            onChange={this.handleUserInput}
          />
          <div className="invalid-feedback">
            Your passwords do not match. Please try again
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={this.doSignUp}
        >
          Register
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.navigateHome}
        >
          Go Back
        </button>
        <div>{this.state.responseText}</div>
      </form>
    );
  }
}

export default CreateAccountComponent;
