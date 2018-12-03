import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import FormLogin from './FormLogin';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Best Planner Ever!</h2>
                </div>
                <FormLogin />
            </div>
        );
    }
}

export default App;