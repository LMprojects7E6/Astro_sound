import api from "./api";

export const registerUser = async (formData) => {
  const response = await api.post("/users", formData);
  return response.data;
};

export const getSession = async () => {
  const response = await api.get("/session");
  return response.data;
};
