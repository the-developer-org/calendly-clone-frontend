import axios from 'axios';
import environmentConfig from '../config/config';
const { API_URL } = environmentConfig;
const api = axios.create({
  API_URL,
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

export default api;
