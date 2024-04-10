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
export default api;
