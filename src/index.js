import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from './context/UserContext';
import axios from 'axios';

import './index.css';
import App from './App';
axios.defaults.baseURL = "https://quiz-busters.herokuapp.com";
//axios.defaults.baseURL = "http://localhost:5000/";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
