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

    doLogin = () => {
        const fields=this.state.fields
        const values=Object.values(fields);
        for(let i=0;i<values.length;i++){
           if (values[i].mandatory){
               values[i].valid=(values[i].value.length>0)?values[i].valid:values[i].valid=false
           }
        }
        this.setState({fields:fields})
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
                password.valid = value.length >= 6;
                break;
            default:
                break;
        }
    }

    errorClass(error) {
        console.log(error)
        return (error === true ? '' : 'has-error');
    }

    render() {
        return (
            <form className="demoForm">
                <h2>Sign up</h2>
                <div className={`form-group ${this.errorClass(this.state.fields.login.valid)}`}>
                    <label htmlFor="login">Login</label>
                    <input type="login" required
                           className={`form-control`}
                           name="login"
                           placeholder="login"
                           value={this.state.fields.login.value}
                           onChange={this.handleUserInput}/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.fields.password.valid)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" required
                           className={`form-control`}
                           name="password"
                           placeholder="password"
                           value={this.state.fields.password.value}
                           onChange={this.handleUserInput}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.doLogin}>Sign up</button>
            </form>
        )
    }
}

export default FormLogin;