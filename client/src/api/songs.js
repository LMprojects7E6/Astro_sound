import api from "./api";
import { headersAuth } from "./api";
export const getThreeSongs = async (accessToken) => {
  const response = await api.get("/songs/threeSongs" , headersAuth(accessToken));
  console.log(response.data);
  return response.data;
};
