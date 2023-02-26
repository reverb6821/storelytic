import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v2",
  headers: {
    "Content-type": "application/json",
  }
});

instance.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('user'));
    config.headers['x-access-token'] =  token ? `${token.accessToken}` : '';
  return config;
});

export default instance