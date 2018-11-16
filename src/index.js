import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fullcalendar.min.css'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import CalendarComponent from "./components/CalendarComponent";

ReactDOM.render(<CalendarComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
