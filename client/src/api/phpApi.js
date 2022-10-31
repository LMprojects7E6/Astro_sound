import axios from "axios";

// Set config defaults when creating the instance
const phpApi = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://eabf-88-12-52-228.eu.ngrok.io",
  withCredentials: true,
});

export const setTokenHeader = (accessToken) => {
  phpApi.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export default phpApi;
