import { signupUser, loginUser, verifyUser } from '../../api/api';

import {
  setUserDetails,
  setUserLoggedIn,
  logOutUser,
} from '../reducers/authSlice';
import { setLoading } from '../reducers/uiSlice';
/**
 * Action creator for user signup.
 * @param {Object} userData - An object containing user data for signup, including username, email, and password.
 * @param {Function} setBtnLoader - A function to set the loading state of a button during signup.
 * @returns {Function} A Redux function that dispatches actions related to user signup process.
 */
export const signUpAction = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
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
    } finally {
      dispatch(setLoading());
    }
  };
};

/**
 * Action creator for user login.
 * @param {Object} userData - An object containing user data for login, typically including email and password.
 * @param {Function} setBtnLoader - A function to set the loading state of a button during login.
 * @returns {Function} A Redux function that dispatches actions related to user login process.
 */
export const logInAction = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
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
    } finally {
      dispatch(setLoading());
    }
  };
};

/**
 * Action creator for user logout.
 * @returns {Function} A Redux thunk function that dispatches actions related to user logout process.
 */
export const logOutAction = () => {
  return (dispatch) => {
    dispatch(logOutUser());
    localStorage.removeItem('token');
  };
};

export const verifyUserAction = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await verifyUser(token);
      const userDetails = {
        name: data.name,
        email: data.email,
      };
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());
      dispatch(setLoading());
    } catch (error) {
      dispatch(setLoading());
    }
  };
};
