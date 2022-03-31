import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from "./survices/authService";
import {BrowserRouter} from "react-router-dom";

const authServise = new AuthService();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App authServise={authServise}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);