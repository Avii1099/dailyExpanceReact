import axios from 'axios';

const BACKEND_DJANGO_URL = import.meta.env.VITE_BACKEND_DJANGO_URL;

const axiosInstance = axios.create({
  baseURL: BACKEND_DJANGO_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response &&
        (error.response.status === 503 || error.response.status === 500)) ||
      error.code === 'ERR_NETWORK'
    ) {
      error.isServerError = true;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
