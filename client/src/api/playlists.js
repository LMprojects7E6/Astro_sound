import api from "./api";

//!GET ALL USER PLAYLISTS
export const getAllPlaylists = async () => {
  const response = await api.get("/playlists");
  return response.data;
};

//!GET THE USERS LIKED PLAYLIST
export const getLikedPlaylists = async (data) => {
  const response = await api.get("/playlists/likedPlaylist", data);
  return response.data;
};

//!GET 5 PLAYLISTS FROM USER
export const getFivePlaylists = async (data) => {
  const response = await api.get("/playlists/fivePlaylists", data);
  return response.data;
};

//!GET PLAYLISTS WITH ID (TODO)
export const getPlaylistsByID = async (data) => {
  const response = await api.get("/playlists", data);
  return response.data;
};

//!POST CREATE NEW PLAYLIST (TODO)
export const createNewPlaylist = async (data) => {
  const response = await api.post("/playlists", data);
  return response.data;
};

// //!PUT UPDATE PLAYLIST WITH ID (TODO)
export const updatePlaylist = async (playlistId) => {
  const response = await api.put(`/playlists/${playlistId}`);
  return response.data;
};

// //!DELETE PLAYLIST (TODO)
export const deletePlaylist = async (playlistId) => {
  const response = await api.put(`/playlists/${playlistId}`);
  return response.data;
};
