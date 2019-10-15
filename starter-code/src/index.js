import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar";

ReactDOM.render(<NavBar />, document.getElementById('root'));

serviceWorker.unregister();