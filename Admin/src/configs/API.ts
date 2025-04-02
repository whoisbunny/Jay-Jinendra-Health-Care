import axios, { AxiosHeaders, AxiosInstance } from "axios";

// Load environment variables
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create an Axios instance
const API: AxiosInstance = axios.create({ baseURL });

// Interceptor to add the Authorization header
API.interceptors.request.use(
  async (req) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("TOKEN");
      if (token && token !== "") {
        if (!req.headers) req.headers = new AxiosHeaders(); // Ensure headers exist
        req.headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
      }
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default API;
