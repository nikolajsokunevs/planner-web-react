import React, { Component } from "react";
import "../FormLogin.css";
import ReactDOM from "react-dom";
import {
  validation,
  validateFields,
  validateField
} from "../utils/validation/";
import services from "../api/services";
import BaseComponent from "./BaseComponent";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        login: {
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

  doLogin = event => {
    event.preventDefault();
    const fields = this.state.fields;
    this.setState({ fields: validateFields(fields) });

    if (Object.values(fields).every(e => e.valid === true)) {
      services
        .login({
          username: this.state.fields.login.value,
          password: this.state.fields.password.value
        })
        .then(result => {
          if (result.isAuthenticationSuccessful) {
            console.log(localStorage.setItem("token", result.token));
            console.log(localStorage);
            ReactDOM.render(<BaseComponent />, document.getElementById("root"));
          }
        });
    }
  };

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
        <h2 />
        <div className={`form-group`}>
          <label htmlFor="login">Login</label>
          <input
            type="login"
            className={`form-control ${this.errorClass(
              this.state.fields.login.valid
            )}`}
            name="login"
            placeholder="login"
            value={this.state.fields.login.value}
            onChange={this.handleUserInput}
            autoFocus
          />
          <div className="invalid-feedback">Please provide a login.</div>
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
          <div className="invalid-feedback">Please provide a password.</div>
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={this.doLogin}
        >
          Login
        </button>
      </form>
    );
  }
}

export default FormLogin;
