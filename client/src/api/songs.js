import api from "./api";

//!POST SONG CLOUDINARY
export const postSong = async (data) => {
  const response = await api.post("/songs", data);
  return response.data;
};
export const getThreeSongs = async () => {
  const response = await api.get("/songs/threeSongs");
  return response.data;
};
