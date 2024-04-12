import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import 'react-day-picker/dist/style.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
