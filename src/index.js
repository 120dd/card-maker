import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from "./survices/authService";

const authServise = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authServise={authServise}/>
  </React.StrictMode>,
  document.getElementById('root')
);