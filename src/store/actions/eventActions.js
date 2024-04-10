import { createEvent, getEvents, getEvent } from '../../api/api';

import {
  setEventDetails,
  removeEventDetails,
  allEvents,
  bookingEvent,
} from '../reducers/eventSlice';
import { setLoading } from '../reducers/uiSlice';

export const createEventAction = (eventData) => {
  return async (dispatch) => {
    try {
      setLoading(true);

      dispatch(setEventDetails(eventData));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
};
export const saveEventAction = (eventData, authToken, navigate, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      await createEvent(eventData, authToken);
      dispatch(removeEventDetails());
      navigate('/event-types');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
};

export const getEventsAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await getEvents(token);
      const { data } = response.data;
      dispatch(allEvents(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getEventAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await getEvent(id);
      const { data } = response.data;
      dispatch(bookingEvent(data));
    } catch (error) {
      console.log(error);
    }
  };
};
