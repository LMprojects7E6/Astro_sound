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
  const response = await api.get(`/songs/genre/${genre}`);
  return response.data;
};

//!GET ALL SONGS FROM A PLAYLIST
export const getAllSongsFromPlaylist = async (playlistID) => {
  const response = await api.get(`/songs/playlist/${playlistID}`);
  return response.data;
};

//!GET SEARCHED SONGS
export const getSearchedSongs = async () => {
  const response = await api.get(`/songs/searchedSongs`);
  return response.data;
};

//!POST UPDATE PLAYLIST WITH A NEW SONG
export const addSongToPlaylist = async (data) => {
  const response = await api.post(
    `/songs/playlist/${data.songId}/${data.playlistId}`
  );
  return response;
};

//!POST UPDATE LIKED PLAYLIST WITH A NEW SONG
export const addSongToLikedPlaylist = async (songID) => {
  const response = await api.post(`/songs/likedSongs/${songID}`);
  return response.data;
};

//!POST UPDATE LIKED PLAYLIST WITH A NEW SONG
export const addToSearchedSongs = async (songID) => {
  const response = await api.post(`/songs/searchedSongs/${songID}`);
  return response.data;
};

//!DELETE SONG FROM LIKED PLAYLIST
export const removeSongFromLikedPlaylist = async (songID) => {
  const response = await api.delete(`/songs/likedSongs/${songID}`);
  return response.data;
};

//!DELETE REMOVE SONG FROM PLAYLIST
export const removeSongFromPlaylist = async (data) => {
  const response = await api.delete(
    `/songs/playlist/${data.songId}/${data.playlistId}`
  );
  return response.data;
};

//!DELETE REMOVE SONG FROM PLAYLIST
export const removeSearchedSongs = async () => {
  const response = await api.delete(`/songs/searchedSongs`);
  return response.data;
};
