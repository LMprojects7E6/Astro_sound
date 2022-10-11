//!CONNECTION TO MODELS
const model = require("../models");

//!GET SONGS
const getAllSongs = async (req, res) => {};

//!GET RANDOM SONGS
const getThreeSongs = async (req, res) => {
  try {
    const threeSongs = await model.Song.aggregate([{ $sample: { size: 3 } }]);
    // const threeSongs = await model.Song.find({});

    res.status(200).send(threeSongs);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!GET SONGS BY GENRE
const getSongsByGenre = async (req, res) => {};

//!GET ALL SONGS FROM A PLAYLIST
const getAllSongsFromPlaylist = async (req, res) => {};

//!POST UPDATE PLAYLIST WITH A NEW SONG
const addSongToPlaylist = async (req, res) => {};

//!DELETE REMOVE SONG FROM PLAYLIST
const removeSongFromPlaylist = async (req, res) => {};

module.exports = {
  getAllSongs: getAllSongs,
  getThreeSongs: getThreeSongs,
  getSongsByGenre: getSongsByGenre,
  getAllSongsFromPlaylist: getAllSongsFromPlaylist,
  addSongToPlaylist: addSongToPlaylist,
  removeSongFromPlaylist: removeSongFromPlaylist,
};
