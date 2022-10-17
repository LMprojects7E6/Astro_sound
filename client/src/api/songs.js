import api from "./api";
import { headersAuth } from "./api";

//!POST SONG CLOUDINARY
export const postSong = async (data, accessToken) => {
  console.log(accessToken);
  const response = await api.post("/songs", data, headersAuth(accessToken));
  return response.data;
};
