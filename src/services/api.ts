import axios from 'axios';

const api = axios.create({
  baseURL: `http://${window.location.hostname}:5000`,
  headers: {
    'accept-language': navigator.language,
  },
});

export default api;
