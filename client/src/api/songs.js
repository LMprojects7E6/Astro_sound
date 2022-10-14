import api from "./api";

export const getThreeSongs = async () => {
  const response = await api.get("/songs/threeSongs");
  console.log(response.data);
  return response.data;
};
