import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { isLocal } from './lib/utils.ts';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('index', process.env.REACT_APP_AUTH0_CALLBACK_URL, window.location.href, isLocal());

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: isLocal() ? process.env.REACT_APP_AUTH0_CALLBACK_DEV_URL : process.env.REACT_APP_AUTH0_CALLBACK_PROD_URL,
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
