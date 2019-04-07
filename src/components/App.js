import React from "react";
import { Component } from 'react';
import '../App.css';
import FormLogin from './FormLogin';
import CreateAccount from './CreateAccount';

class App extends Component {
    render() {
        return (
            <div className="App pb-0">
                <CreateAccount />
            </div>
        );
    }
}

export default App;
