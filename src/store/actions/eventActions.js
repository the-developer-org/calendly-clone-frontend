import {
  createEvent,
  getEvents,
  getEvent,
  bookSlot,
  getBookedSlots,
  deleteEvent,
} from '../../api/api';
import { toast } from 'sonner';
import { errorToastHandler } from '../../util/errrorHandler';
import {
  setEventDetails,
  removeEventDetails,
  allEvents,
  bookingEvent,
  setBookedEvents,
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
      toast.success('Created event successfully');
      dispatch(removeEventDetails());
      navigate('/event-types');
    } catch (error) {
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'createEvent');
    } finally {
      setLoading(false);
    }
  };
};

export const getEventsAction = (token, setLoader) => {
  return async (dispatch) => {
    try {
      const response = await getEvents(token);
      const { data } = response.data;
      dispatch(allEvents(data));
    } catch (error) {
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'getEvents');
    } finally {
      setLoader(false);
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
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'getEvent');
    }
  };
};
export const bookSlotAction = (slotData, setLoading, setBooked) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      await bookSlot(slotData);
      toast.success('Slot booking successful');
      setBooked(true);
    } catch (error) {
      setBooked(false);
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'getEvent');
    } finally {
      setLoading(false);
    }
  };
};
export const deleteEventAction = (id, setLoading) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return toast.error('token missing');
    }
    try {
      await deleteEvent(id, token);
      const prevEvents = getState().event.allEvents;
      const newEvents = prevEvents.filter((event) => {
        return event.id !== id;
      });
      dispatch(allEvents(newEvents));
      toast.success('Event Deleted');
    } catch (error) {
      const data = error.response || {
        status: 500,
        data: { error: { message: 'Please try again later' } },
      };
      errorToastHandler(data, 'deleteEvent');
    }
  };
};

export const fecthedBookSlots = (setLoader) => {
  const token = localStorage.getItem('token');
  return async (dispatch) => {
    try {
      if (!token) {
        setLoader(false);
        return toast.error('error fetching book events');
      }
      const { data } = await getBookedSlots(token);
      if (data) {
        dispatch(setBookedEvents(data.data));
      }
    } catch (error) {
      const data = error.response
        ? error.response
        : {
            status: 500,
            data: { error: { message: 'Please try again later' } },
          };
      errorToastHandler(data, 'bookEvent');
    } finally {
      setLoader(false);
    }
  };
};
