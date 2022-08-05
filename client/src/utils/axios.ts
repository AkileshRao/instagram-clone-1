import axios from "axios";

const baseURL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.error('response',response);
    return response;
  },
  async (error) => {
    console.error('error',error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
