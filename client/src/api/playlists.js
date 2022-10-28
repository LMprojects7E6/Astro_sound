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
export const updatePlaylist = async (data) => {
  const playlistImage =
    data.dataForm.get("playListImage").name &&
    data.dataForm.get("playListImage").size;
  let response;
  if (playlistImage) {
    console.log("new file");
    response = await api.put(`/playlists/${data.playlistId}`, data.dataForm);
  } else {
    console.log("no new file");
    response = await api.put(
      `/playlists/noImage/${data.playlistId}`,
      data.dataForm
    );
  }
  return response.data;
};

// //!DELETE PLAYLIST
export const deletePlaylist = async (playlistId) => {
  const response = await api.delete(`/playlists/${playlistId}`);
  return response.data;
};
