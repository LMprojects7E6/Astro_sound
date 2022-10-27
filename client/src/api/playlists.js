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

//!GET PLAYLISTS WITH ID
export const getPlaylistsByID = async (playlistId) => {
  const response = await api.get(`/playlists/${playlistId}`);
  return response.data;
};

//!POST CREATE NEW PLAYLIST
export const createNewPlaylist = async (data) => {
  const response = await api.post("/playlists", data);
  return response.data;
};

// //!PUT UPDATE PLAYLIST WITH ID
export const updatePlaylist = async (playlistId, data) => {
  const response = await api.put(`/playlists/${playlistId}`, data);
  return response.data;
};

// //!DELETE PLAYLIST
export const deletePlaylist = async (playlistId) => {
  const response = await api.delete(`/playlists/${playlistId}`);
  return response.data;
};
