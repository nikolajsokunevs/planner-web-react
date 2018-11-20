import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import '../Form.css';

class FormLogin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            formErrors: {login: '', password: ''},
            loginValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let loginValid = this.state.loginValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'login':
                loginValid = value.length >= 1;
                fieldValidationErrors.login = loginValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            loginValid: loginValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
    }

    render () {
        return (
            <form className="demoForm">
                <h2>Sign up</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.login)}`}>
                    <label htmlFor="login">Login</label>
                    <input type="login" required className="form-control" name="login"
                           placeholder="login"
                           value={this.state.login}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                           placeholder="password"
                           value={this.state.password}
                           onChange={this.handleUserInput}  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
            </form>
        )
    }
}

export default FormLogin;