import { configureStore } from '@reduxjs/toolkit';

import authSlice from './reducers/authSlice';
import eventSlice from './reducers/eventSlice';
import uiSlice from './reducers/uiSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    event: eventSlice,
    ui: uiSlice,
  },
});

export default store;
