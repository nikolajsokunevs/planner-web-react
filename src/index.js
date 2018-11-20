import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import './fullcalendar.min.css'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App'
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
