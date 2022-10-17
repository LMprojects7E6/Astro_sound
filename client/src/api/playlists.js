import api from "./api";
import { headersAuth } from "./api";

export const getFivePlaylists = async (accessToken) => {
  const response = await api.get("/playlists/fivePlaylists", headersAuth(accessToken));
  return response.data;
};
