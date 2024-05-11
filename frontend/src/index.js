import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { restoreCSRF, csrfFetch } from './store/csrf';
import { ModalProvider, Modal } from './context/Modal';
import { SpotFilterProvider } from './context/SpotFilter';
import App from './App';

import configureStore from './store';
import * as sessionActions from "./store/session";
import * as spotActions from './store/spots';
import * as reviewActions from './store/reviews';
import * as userActions from './store/user';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.spotActions = spotActions;
  window.reviewActions = reviewActions;
  window.userActions = userActions;
}

function Root() {
  return (
    <SpotFilterProvider>
      <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            <Modal />
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    </SpotFilterProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
