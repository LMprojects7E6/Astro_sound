import api from "./api";

//!POST SONG CLOUDINARY
export const postSong = async (data) => {
  const response = await api.post("/songs", data);
  return response.data;
};
