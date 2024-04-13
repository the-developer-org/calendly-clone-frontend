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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'eventSlice/setEventDetails',
          'eventDetails/allEvents',
          'eventDetails/bookingEvent',
          'eventDetails/setBookedEvents',
        ],
        ignoredPaths: [
          'event.eventDetails.startDate',
          'event.eventDetails.endDate',
        ],
      },
    }),
});

export default store;
