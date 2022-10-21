import api from "./api";

//!POST SONG CLOUDINARY
export const postSong = async (data) => {
  const response = await api.post("/songs", data);
  return response.data;
};
//!GET ALL SONGS
export const getSongs = async () => {
  const response = await api.get("/songs");
  return response.data;
};
//!GET THREE SONGS
export const getThreeSongs = async () => {
  const response = await api.get("/songs/threeSongs");
  return response.data;
};
//!GET SONGS BY GENRE
export const getSongsByGenre = async (genre) => {
  const response = await api.get(`/songs/${genre}`);
  return response.data;
};
//!GET ALL SONGS FROM A PLAYLIST
export const getAllSongsFromPlaylist = async (playlistID) => {
  const response = await api.get(`/songs/playlist/${playlistID}`);
  return response.data;
};
//!POST UPDATE PLAYLIST WITH A NEW SONG
export const addSongToPlaylist = async (songID, playlistID) => {
  const response = await api.get(`/songs/${songID}/${playlistID}`);
  return response.data;
};
//!DELETE REMOVE SONG FROM PLAYLIST
export const removeSongFromPlaylist = async (songID, playlistID) => {
  const response = await api.get(`/songs/${songID}/${playlistID}`);
  return response.data;
};
