import { createEvent, getEvents, getEvent } from '../../api/api';
import { toast } from 'sonner';
import { errorToastHandler } from '../../util/errrorHandler';
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
    } catch (error) {
      console.log(error);
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
        toast.success("Created event successfully")
      dispatch(removeEventDetails());
      navigate('/event-types');
    } catch (error) {
      errorToastHandler(error.response, 'createEvent');
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
      errorToastHandler(error.response, 'getEvents');
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
      errorToastHandler(error.response, 'getEvent');
    }
  };
};
