import api from "./api";
import { headersAuth } from "./api";

export const registerUser = async (formData) => {
  const response = await api.post("/users", formData);
  return response.data;
};

export const getSession = async (accessToken) => {
  const response = await api.get("/session", headersAuth(accessToken));
  return response.data;
};
