import React, {Component} from 'react';
import '../Form.css';

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                login: {value: '', mandatory: true, valid: true},
                password: {value: '', mandatory: true, valid: true}
            }
        }
    }

    doLogin = (event) => {
        event.preventDefault();
        const fields = this.state.fields
        const values = Object.values(fields);
        for (let i = 0; i < values.length; i++) {
            if (values[i].mandatory) {
                values[i].valid = (values[i].value.length > 0) ? values[i].valid : values[i].valid = false
            }
        }
        this.setState({fields: fields})
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let fields = this.state.fields
        fields[name].value = value
        this.validateField(name, value)
        this.setState({fields: fields});
    }

    validateField(fieldName, value) {
        let login = this.state.fields.login;
        let password = this.state.fields.password;

        switch (fieldName) {
            case 'login':
                login.valid = value.length >= 1;
                break;
            case 'password':
                password.valid = value.length >= 1;
                break;
            default:
                break;
        }
    }

    errorClass(error) {
        return (error === true ? '' : 'is-invalid');
    }

    render() {
        return (
            <form className="demoForm">
                <h2>Sign up</h2>
                <div className={`form-group`}>
                    <label htmlFor="login">Login</label>
                    <input type="login"
                           className={`form-control ${this.errorClass(this.state.fields.login.valid)}`}
                           name="login"
                           placeholder="login"
                           value={this.state.fields.login.value}
                           onChange={this.handleUserInput}/>
                    <div className="invalid-feedback">
                        Please provide a login.
                    </div>
                </div>
                <div className={`form-group`}>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           className={`form-control ${this.errorClass(this.state.fields.password.valid)}`}
                           name="password"
                           placeholder="password"
                           value={this.state.fields.password.value}
                           onChange={this.handleUserInput}/>
                    <div className="invalid-feedback">
                        Please provide a password.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.doLogin}>Sign up</button>
            </form>
        )
    }
}

export default FormLogin;