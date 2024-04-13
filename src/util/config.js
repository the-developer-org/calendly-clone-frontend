const { VITE_BASE_URL, VITE_FE_URL } = import.meta.env;

const config = {
  API_URL: VITE_BASE_URL,
  FE_URL: VITE_FE_URL,
};

export default config;
