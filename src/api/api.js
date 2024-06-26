import axios from 'axios';
import environmentConfig from '../util/config';
const { API_URL } = environmentConfig;
const api = axios.create({
  baseURL: API_URL,
});
// Authentication APIs
/**
 * Signup User API
 * @param {Object} userData - user data for signing up
 * @returns {Promise} Axios promise
 */
export const signupUser = (userData) => api.post('/auth/signup', userData);

/**
 * Login User API
 * @param {Object} creds - user credentials for login
 * @returns {Promise} Axios promise
 */
export const loginUser = (creds) => api.post('/auth/login', creds);

export const verifyUser = (token) => api.post('/auth/verify', { token });

export const createEvent = (eventData, token) =>
  api.post('/event/create-event', eventData, {
    headers: { Authorization: token },
  });

export const getEvents = (token) =>
  api.get('/event/get-events', { headers: { Authorization: token } });

export const getEvent = (id) => api.get(`/event/get-event/${id}`);

export const bookSlot = (data) => api.post('/slot/book-slot', data);
export const deleteEvent = (eventId, token) =>
  api.post(
    '/event/delete-event',
    { eventId },
    {
      headers: { Authorization: token },
    }
  );

export const getBookedSlots = (current, rows, token) => {
  return api.get(`/slot/get-booked-slots`, {
    params: {
      current: current,
      rows: rows,
    },
    headers: { Authorization: token },
  });
};

export const setDefaultMeetlink = (token, data) => {
  return api.post('/event/set-default-link', data, {
    headers: { Authorization: token },
  });
};

export const deleteDefaultMeetlink = (token) => {
  return api.post(
    '/event/delete-default-link',
    {},
    {
      headers: { Authorization: token },
    }
  );
};

export default api;
