import { createEvent } from '../../api/api';

import { setEventDetails, removeEventDetails } from '../reducers/eventSlice';
import { setLoading } from '../reducers/uiSlice';

export const createEventAction = (eventData) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());

      dispatch(setEventDetails(eventData));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading());
    }
  };
};
export const saveActionEvent = (eventData, authToken, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      await createEvent(eventData, authToken);
      dispatch(removeEventDetails());
      navigate('/event-types');
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading());
    }
  };
};
