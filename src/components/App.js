import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';
import FormLogin from './FormLogin';
class App extends Component {
    render() {
        return (
            <div className="App pb-0">
                <FormLogin />
            </div>
        );
    }
}

export default App;
