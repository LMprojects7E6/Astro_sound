import api from "./api";

export const registerUser = async (formData) => {
  const response = await api.post("/users", formData);
  return response.data;
};

export const getSession = async (accessToken) => {
  const response = await api.get("/session", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  return response.data;
};
