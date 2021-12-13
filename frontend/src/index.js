import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import './index.scss';

ReactDOM.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
  redirectUri={window.location.origin}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
  
  document.getElementById('root')
);

