import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './Auth'; // Replace App with Auth
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify'; // Named import
import awsExports from './aws-exports';
import { BrowserRouter } from 'react-router-dom';

Amplify.configure(awsExports); // Pass awsExports directly

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();