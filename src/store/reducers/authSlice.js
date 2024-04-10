import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    isloggedIn: false,
    userDetails: {},
    authToken: localStorage.getItem('token'),
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
  },
});

export default authSlice.reducer;
export const { setUserDetails, logOutUser, setUserLoggedIn } =
  authSlice.actions;
