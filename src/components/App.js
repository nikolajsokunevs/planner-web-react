import React, { Component } from 'react';
import logo from '../logo9.png';
import '../App.css';
import FormLogin from './FormLogin';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>!</h2>
                </div>
                <FormLogin />
            </div>
        );
    }
}

export default App;