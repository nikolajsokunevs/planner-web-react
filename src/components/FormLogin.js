import React, { Component } from "react";
import "../FormLogin.css";
import ReactDOM from "react-dom";
import CalendarComponent from "./CalendarComponent";
import logo from '../logo.png';
import {
  validation,
  validateFields,
  validateField
} from "../utils/validation/";
import services from "../api/services";

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
  handleSubmit = event => {
    event.preventDefault();
  };

  doLogin = event => {
    event.preventDefault();
    const fields = this.state.fields;
    this.setState({
      fields: validateFields(fields)
    });

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
            ReactDOM.render(
              <CalendarComponent />,
              document.getElementById("root")
            );
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
    this.setState({
      fields: fields
    });
  };

  errorClass(error) {
    return error === true ? "" : "is-invalid";
  }

  render() {
    return (
      <div className="wrapper-page">
        <div className="card overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 m-b-5">Welcome Back!</h4>
            <p className="text-white-50 mb-4">Sign in to continue to PlanIt.</p>
            <div class="logo">
              <img src={logo} height="24" alt="logo" />
            </div>
          </div>

          <div className="account-card-content" />
        </div>
      </div>
    );
  }
}

export default FormLogin;
