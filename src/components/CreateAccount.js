import React, { Component } from "react";
import services from "../api/services";
import InputFormComponent from "./controls/InputFormComponent";
import {
  validation,
  validateFields,
  validateField
} from "../utils/validation/";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: {
          value: "",
          mandatory: true,
          valid: true,
          validationType: validation.LOGIN
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
    if (this.state.fields.username.valid) {
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
          this.setState({ responseText: result });
        });
    }
  }

  handleUserInput = e => {
    const name = e.target.name;
    console.log("name: " + name);
    const value = e.target.value;
    let fields = this.state.fields;
    fields[name].value = value;
    validateField(fields[name]);
    this.setState({ fields: fields });
  };

  handleUserInputWithoutValidation = e => {
    const name = e.target.name;
    const value = e.target.value;
    let fields = this.state.fields;
    fields[name].value = value;
    if (!this.state.fields.username.valid) {
      validateField(fields[name]);
    }
    this.setState({ fields: fields });
  };

  handleUserInputOnBlur = e => {
    const name = e.target.name;
    const value = e.target.value;
    let fields = this.state.fields;
    fields[name].value = value;
    this.setState({ fields: fields });
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
              <img src={logo} height="24" alt="logo" />
            </div>
          </div>
          <div className="account-card-content">
            <form className="form-horizontal m-t-30">
              <InputFormComponent
                label="Email"
                className={this.errorClass(this.state.fields.username.valid)}
                type="input"
                name="username"
                placeholder="Enter email"
                onChange={this.handleUserInput}
              />
              <InputFormComponent
                label="Password"
                className={this.errorClass(this.state.fields.password.valid)}
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleUserInput}
              />
              <InputFormComponent
                label="Confirm Password"
                className={this.errorClass(
                  this.state.fields.confirmPassword.valid
                )}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.handleUserInput}
              />
              <div className="form-group row m-t-20">
                <div className="col-12 text-right">
                  <button
                    className="btn btn-primary w-md waves-effect waves-light"
                    type="submit"
                    onClick={this.doSignUp}
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="form-group m-t-10 mb-0 row">
                <div className="col-12 m-t-20">
                  <p className="mb-0">
                    By registering you agree to the Veltrix
                    <a href="#" className="text-primary">
                      {" "}
                      Terms of Use
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="m-t-40 text-center">
          <p>
            Already have an account ?
            <a href="#" className="font-500 text-primary">
              {" "}
              Login
            </a>
          </p>
          <p>
            © 2019. Crafted by Kolyan i Marat{" "}
            <FontAwesomeIcon icon={faFistRaised} className="fist" />
          </p>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
