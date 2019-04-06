import React, { Component } from "react";
import "../assets/css/formLogin.css";
import ReactDOM from "react-dom";
import CalendarComponent from "./CalendarComponent";
import InputFormComponent from "./controls/InputFormComponent";
import logo from '../logo.png';
import {validation, validateFields, validateField} from "../utils/validation/";
import services from "../api/services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'

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
            ReactDOM.render(
              <CalendarComponent />,
              document.getElementById("root")
            );
          }
        });
    }
  };

  handleUserInput = e => {
    let name=e.target.name;
    let fields = this.state.fields;
    fields[name].value = e.target.value;
    validateField(fields[name]);
    this.setState({
      fields: fields
    });
  };

  errorClass(error) {
    return error === true ? "form-control" : "form-control is-invalid";
  }

  render() {
    return (
      <div className="wrapper-page">
        <div className="card overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 m-b-5">Welcome Back!</h4>
            <p className="text-white-50 mb-4">Sign in to continue to PlanIt.</p>
            <div className="logo">
              <img src={logo} height="24" alt="logo"/>
            </div>
          </div>
          <div className="account-card-content">
            <form className="form-horizontal m-t-30">
              <InputFormComponent type="input" className={this.errorClass(this.state.fields.login.valid)} name="login" placeholder="Enter username" onChange={this.handleUserInput}/>
              <InputFormComponent type="password" className={this.errorClass(this.state.fields.password.valid)} name="password" placeholder="Enter password" onChange={this.handleUserInput}/>
              <div className="form-group row m-t-20">
                <div className="col-sm-6">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customControlInline"></input>
                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                  </div>
                </div>
                <div className="col-sm-6 text-right">
                  <button className="btn btn-primary w-md waves-effect waves-light" type="submit" onClick={this.doLogin}>Log In</button>
                </div>
              </div>
              <div className="form-group m-t-10 mb-0 row">
                <div className="col-12 m-t-20">
                  <a href="">
                    <FontAwesomeIcon icon={faLock} /> Forgot your password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="m-t-40 text-center">
          <p>Don't have an account?
            <a className="font-500 text-primary"> Signup now</a>
          </p>
          <p>© 2019. Crafted by Kolyan i Marat <FontAwesomeIcon icon={faFistRaised} className="fist"/></p>
        </div>
      </div>
    );
  }
}

export default FormLogin;
