import axios from "axios";

export const headersAuth = (accessToken) => {
  return {
    headers: { Authorization: "Bearer " + accessToken },
  };
};

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default api;
