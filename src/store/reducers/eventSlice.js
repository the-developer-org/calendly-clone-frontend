import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'eventSlice',
  initialState: { hasEvent: false, eventDetails: {} },
  reducers: {
    setEventDetails(state, action) {
      state.eventDetails = action.payload;
      state.hasEvent = true;
    },
    removeEventDetails(state) {
      state.userDetails = {};
      state.hasEvent = false;
    },
  },
});

export default eventSlice.reducer;
export const { setEventDetails, removeEventDetails } = eventSlice.actions;
