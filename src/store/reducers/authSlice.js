import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    isloggedIn: false,
    userDetails: {},
    authToken: localStorage.getItem('token'),
    defaultMeetLink: {},
  },
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = action.payload;
      state.authToken = action.payload.token;
    },
    setUserLoggedIn(state) {
      state.isloggedIn = true;
    },
    logOutUser(state) {
      state.isloggedIn = false;
      state.userDetails = {};
    },
    setUserDefaultMeetLink(state, action) {
      state.defaultMeetLink = action.payload;
    },
  },
});

export default authSlice.reducer;
export const {
  setUserDetails,
  logOutUser,
  setUserLoggedIn,
  setUserDefaultMeetLink,
} = authSlice.actions;
