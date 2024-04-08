import { signupUser, loginUser, verifyUser } from '@/api/api';

import {
  setUserDetails,
  setUserLoggedIn,
  logOutUser,
} from '../reducers/authSlice';
/**
 * Action creator for user signup.
 * @param {Object} userData - An object containing user data for signup, including username, email, and password.
 * @param {Function} setBtnLoader - A function to set the loading state of a button during signup.
 * @returns {Function} A Redux function that dispatches actions related to user signup process.
 */
export const signUpAction = (userData, setBtnLoader) => {
  return async (dispatch) => {
    try {
      setBtnLoader(true);
      console.log(userData);
      const { data } = await signupUser(userData);
      console.log(data);
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
      setBtnLoader(false);
    }
  };
};

/**
 * Action creator for user login.
 * @param {Object} userData - An object containing user data for login, typically including email and password.
 * @param {Function} setBtnLoader - A function to set the loading state of a button during login.
 * @returns {Function} A Redux function that dispatches actions related to user login process.
 */
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
    } finally {
      setBtnLoader(false);
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

export const verifyUserAction = (token, setLoader) => {
  return async (dispatch) => {
    try {
      const { data } = await verifyUser(token);
      console.log(data);
      const userDetails = {
        name: data.name,
        email: data.email,
      };
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
};
