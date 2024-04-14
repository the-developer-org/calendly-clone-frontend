import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState: {
    hasEvent: false,
    eventDetails: {},
    allEvents: [],
    bookingEvent: {},
    bookedSlots: [],
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
    setBookedEvents(state, action) {
      state.bookedSlots = action.payload;
    },
    setPreviewLock(state, action) {
      state.hasEvent = false;
    },
    resetEventValues(state, action) {
      (state.allEvents = []),
        (state.bookedEvents = []),
        (state.bookingEvent = {}),
        (state.eventDetails = {}),
        (state.hasEvent = false);
    },
  },
});

export default eventSlice.reducer;
export const {
  setEventDetails,
  removeEventDetails,
  allEvents,
  bookingEvent,
  setBookedEvents,
  resetEventValues,
  setPreviewLock,
} = eventSlice.actions;
