//!CONNECTION TO MODELS
const model = require("../models");

//!GET ALL USER PLAYLISTS
const getAllPlaylists = async (req, res) => {
  const { userID } = req.id;

  try {
    const playlistsArray = await model.User.findById(userID).populate(
      "playlists"
    );

    const { playlists } = playlistsArray;
    res.status(200).send(playlists);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET PLAYLISTS WITH ID
const getPlaylistsByID = async (req, res) => {
  const { playlistID } = req.params;

  try {
    const playlist = await model.Playlist.findById(playlistID);
    res.status(200).send(playlist);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!POST NEW PLAYLIST
const createPlaylist = async (req, res) => {};

//!PUT UPDATE PLAYLIST WITH ID
const updatePlaylist = async (req, res) => {};

module.exports = {
  getAllPlaylists: getAllPlaylists,
  getPlaylistsByID: getPlaylistsByID,
  createPlaylist: createPlaylist,
  updatePlaylist: updatePlaylist,
};
