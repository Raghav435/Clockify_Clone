import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider as ReduxProvider} from 'react-redux';
import { Provider as PrabhatProvider } from 'react-redux';
import {Store} from '../src/Redux/Store';
import {store} from "../src/app/store"
import { UserAuthContextProvider } from './context/UserAuthContext';

import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserAuthContextProvider>
      <ReduxProvider store={Store}>
    <PrabhatProvider store={store}>




    <ReduxProvider store={Store}>

    <App />
 
    </PrabhatProvider>
    </ReduxProvider>
    </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


