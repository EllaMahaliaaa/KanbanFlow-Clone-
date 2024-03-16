import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const { REACT_APP__AUTH0_DOMAIN, REACT_APP__AUTH0_CLIENT_ID } = process.env
console.log(REACT_APP__AUTH0_DOMAIN, REACT_APP__AUTH0_CLIENT_ID)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP__AUTH0_DOMAIN}
      clientId={REACT_APP__AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);


