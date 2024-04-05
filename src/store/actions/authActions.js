import { signupUser, loginUser } from '@/api/api';

import {
  setUserDetails,
  setUserLoggedIn,
  logOutUser,
} from '../reducers/authSlice';

export const signUpAction = (userData, setBtnLoader) => {
  return async (dispatch) => {
    try {
      setBtnLoader(true);
      const { data } = await signupUser(userData);
      const userDetails = {
        name: data.name,
        email: data.email,
      };
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());

      localStorage.setItem('token', data.token);
    } catch (err) {
      console.log(err);
    }
    setBtnLoader(false);
  };
};

export const logInAction = (userData, setBtnLoader) => {
  return async (dispatch) => {
    try {
      setBtnLoader(true);
      const { data } = await loginUser(userData);
      const userDetails = {
        name: data.name,
        email: data.email,
      };
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());

      localStorage.setItem('token', data.token);
    } catch (err) {
      console.log(err);
    }

    setBtnLoader(false);
  };
};

// for logout
export const logOutAction = () => {
  return (dispatch) => {
    dispatch(logOutUser());
    localStorage.removeItem('token');
  };
};
