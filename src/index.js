import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{BrowserRouter} from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
