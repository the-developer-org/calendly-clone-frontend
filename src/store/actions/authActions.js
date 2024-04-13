import {
  signupUser,
  loginUser,
  verifyUser,
  setDefaultMeetlink,
  deleteDefaultMeetlink,
} from '../../api/api';
import { toast } from 'sonner';
import { errorToastHandler } from '../../util/errrorHandler';

import {
  setUserDetails,
  setUserLoggedIn,
  logOutUser,
  setUserDefaultMeetLink,
} from '../reducers/authSlice';
import { resetEventValues } from '../reducers/eventSlice';
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
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'signup');
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
      dispatch(setUserDefaultMeetLink(data.defaultMode));
      dispatch(setUserDetails(userDetails));
      dispatch(setUserLoggedIn());
      localStorage.setItem('token', data.token);
    } catch (error) {
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'login');
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
    dispatch(resetEventValues());
    dispatch(setUserDefaultMeetLink({}));
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
      dispatch(setUserDefaultMeetLink(data.defaultMode));
      dispatch(setUserLoggedIn());
    } catch (error) {
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'verifyuser');
    } finally {
      setLoading(false);
    }
  };
};

export const setDefaultMeetlinkAction = (
  formData,
  setBtnLoader,
  setShowModal
) => {
  const token = localStorage.getItem('token');
  return async (dispatch, getState) => {
    try {
      if (!token) {
        return toast.error('token missing');
      }
      setBtnLoader(true);
      await setDefaultMeetlink(token, formData);
      dispatch(setUserDefaultMeetLink(formData));
      toast.success('default meet link added');
      setShowModal(false);
    } catch (error) {
      toast.error('Error while adding the link');
    } finally {
      setBtnLoader(false);
    }
  };
};

export const deleteDefaultMeetlinkAction = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
      if (!token) {
        return toast.error('token missing');
      }
      await deleteDefaultMeetlink();
      toast.success('Meeting link deleted');
      dispatch(setUserDefaultMeetLink({}));
    } catch (error) {
      toast.error('Error while deleting the link');
    }
  };
};
