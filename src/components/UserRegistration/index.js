import React, { Component } from "react";
import ReactDOM from "react-dom";
import services from "../../api/services";
import InputFormComponent from "../controls/InputFormComponent";
import HeaderComponent from "../HeaderComponent";
import TermsComponent from "../TermsComponent";
import Login from "../Login";
import {
  validation,
  validateFields,
  validateField
} from "../../utils/validation/";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTermOfUse:false,
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

  goToLoginPage() {
    ReactDOM.render(<Login />, document.getElementById("root"));
  }

  doSignUp = event => {
    event.preventDefault();
    const fields = this.state.fields;
    this.setState({ fields: validateFields(fields) });
    if (this.state.fields.username.valid) {
      if (
        this.state.fields.password.value ===
        this.state.fields.confirmPassword.value
      ) {
        this.callCreateAccountApi(event);
      }else{
        let fields = this.state.fields;
        fields['confirmPassword'].valid = false;
        this.setState({ fields: fields });
      }
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


  showModal = (date) => {
   this.setState({ showTermOfUse: true});
  };

  hideModal = () => {
    this.setState({ showTermOfUse: false});
  };

  handleUserInput = e => {
    const name = e.target.name;
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


  errorClass(error) {
    return error === true ? "form-control" : "form-control is-invalid";
  }

  render() {
    return (
      <div>
      <TermsComponent showTerms={this.state.showTermOfUse} hideTerms={this.hideModal}/>
      <div className="wrapper-page">
        <div className="card overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 m-b-5">Welcome to PlanIt</h4>
            <p className="text-white-50 mb-4">Create an account to continue</p>
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
                onChange={this.handleUserInputWithoutValidation}
                errorMessage="Your username needs to be between 6 and 20 characters long and can only contain letters and numbers"
              />
              <InputFormComponent
                label="Password"
                className={this.errorClass(this.state.fields.password.valid)}
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleUserInput}
                errorMessage="Your username needs to be between 6 and 20 characters long and can only contain letters and numbers"
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
                errorMessage="Your passwords do not match. Please try again"
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
                    By registering you agree to the PlanIt
                    <a href="#" className="text-primary" onClick={this.showModal}>
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
            Already have an account?
            <a href="#" className="font-500 text-primary" onClick={this.goToLoginPage}>
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
      </div>
    );
  }
}

export default UserRegistration;
