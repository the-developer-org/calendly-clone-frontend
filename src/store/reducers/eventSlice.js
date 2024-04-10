import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState: {
    hasEvent: false,
    eventDetails: {},
    allEvents: [],
    bookingEvent: {},
  },
  reducers: {
    setEventDetails(state, action) {
      state.eventDetails = action.payload;
      state.hasEvent = true;
    },
    removeEventDetails(state) {
      state.userDetails = {};
      state.hasEvent = false;
    },
    allEvents(state, action) {
      state.allEvents = action.payload;
    },
    bookingEvent(state, action) {
      state.bookingEvent = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const { setEventDetails, removeEventDetails, allEvents, bookingEvent } =
  eventSlice.actions;
