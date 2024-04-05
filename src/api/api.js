import axios from 'axios';
import environmentConfig from '../config/config';
const { API_URL } = environmentConfig;
const api = axios.create({
  API_URL,
});

export const signupUser = (userData) => api.post('/auth/signup', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);

export default api;
