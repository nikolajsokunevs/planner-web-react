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
      }
    };
  }

  // doLogin = event => {
  //   event.preventDefault();
  //   const fields = this.state.fields;
  //   this.setState({ fields: validateFields(fields) });

  //   if (Object.values(fields).every(e => e.valid === true)) {
  //     services
  //       .login({
  //         username: this.state.fields.login.value,
  //         password: this.state.fields.password.value
  //       })
  //       .then(result => {
  //         if (result.isAuthenticationSuccessful) {
  //           console.log(localStorage.setItem("token", result.token));
  //           console.log(localStorage);
  //           ReactDOM.render(<BaseComponent />, document.getElementById("root"));
  //         }
  //       });
  //   }
  // };

  doSignUp = event => {
    event.preventDefault();
    const fields = this.state.fields;
    this.setState({ fields: validateFields(fields) });
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
          <div className="invalid-feedback">Please confirm password.</div>
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
      </form>
    );
  }

  // handleUserInput = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   let fields = this.state.fields;
  //   fields[name].value = value;
  //   validateField(fields[name]);
  //   this.setState({ fields: fields });
  // };

  // errorClass(error) {
  //   return error === true ? "" : "is-invalid";
  // }

  // navigateHome() {
  //   ReactDOM.render(<App />, document.getElementById("root"));
  // }

  // render() {
  //   return (
  //     <React.Fragment>
  //       <h1>Create Account</h1>

  //       <div>
  //         <div>
  //           <div title="Username">
  //             <label>Username</label>
  //             <input
  //               type="username"
  //               className={`form-control ${this.errorClass(
  //                 this.state.fields.username.valid
  //               )}`}
  //               name="username"
  //               placeholder="Username"
  //               value={this.state.fields.username.value}
  //               onChange={this.handleUserInput}
  //             />
  //             <div className="invalid-feedback">Please provide a password.</div>
  //           </div>
  //           <div className={`form-group`}>
  //             <label>Password</label>
  //             <input
  //               type="password"
  //               className={`form-control ${this.errorClass(
  //                 this.state.fields.password.valid
  //               )}`}
  //               name="password"
  //               placeholder="Password"
  //               value={this.state.fields.password.value}
  //               onChange={this.handleUserInput}
  //             />
  //             <div className="invalid-feedback">Please provide a password.</div>
  //           </div>
  //           <div>
  //             <label>Confirm Password</label>
  //             <input
  //               type="password"
  //               name="confirmPassword"
  //               placeholder="Confirm Password"
  //               value={this.state.fields.confirmPassword.value}
  //               onChange={this.handleUserInput}
  //             />
  //           </div>
  //           <button name="Submit" onClick={this.doSignUp}>
  //             Register
  //           </button>
  // <button name="Back" onClick={this.navigateHome}>
  //     Go Back
  //   </button>
  //         </div>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
}

export default CreateAccountComponent;
