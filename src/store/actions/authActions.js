import { signupUser, loginUser, verifyUser } from '../../api/api';
import { toast } from 'sonner';
import { errorToastHandler } from '../../util/errrorHandler';

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
export const signUpAction = (userData, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const response = await signupUser(userData);
      toast.success('Signup successful');
      const { data } = response.data;
      const userDetails = {
        name: data.name,
        email: data.email,
        token: data.token,
      };
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());
      localStorage.setItem('token', data.token);
    } catch (error) {
      errorToastHandler(error.response, 'signup');
    } finally {
      setLoading(false);
    }
  };
};

/**
 * Action creator for user login.
 * @param {Object} userData - An object containing user data for login, typically including email and password.
 * @param {Function} setBtnLoader - A function to set the loading state of a button during login.
 * @returns {Function} A Redux function that dispatches actions related to user login process.
 */
export const logInAction = (userData, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const response = await loginUser(userData);
      toast.success('Login successful');
      const { data } = response.data;
      const userDetails = {
        name: data.name,
        email: data.email,
        token: data.token,
      };
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.log(error.response);
      errorToastHandler(error.response, 'login');
    } finally {
      setLoading(false);
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

export const verifyUserAction = (token, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const response = await verifyUser(token);
      const { data } = response.data;
      const userDetails = {
        name: data.name,
        email: data.email,
        token: data.token,
      };

      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());
    } catch (error) {
      errorToastHandler(error.response, 'verifyuser');
    } finally {
      setLoading(false);
    }
  };
};
