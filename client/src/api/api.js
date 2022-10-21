import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const setTokenHeader = (accessToken) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};
export default api;
