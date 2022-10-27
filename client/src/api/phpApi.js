import axios from "axios";

// Set config defaults when creating the instance
const phpApi = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const setTokenHeader = (accessToken) => {
  phpApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export default phpApi;
