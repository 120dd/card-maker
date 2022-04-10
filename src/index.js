import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from "./survices/authService";
import DataControl from "./survices/dataControl";

const authServise = new AuthService();
const dataControl = new DataControl()

ReactDOM.render(
  <React.StrictMode>
          <App
              authServise={authServise}
              dataControl={dataControl}
          />
  </React.StrictMode>,
  document.getElementById('root')
);