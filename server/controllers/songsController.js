//!CONNECTION TO MODELS
const model = require("../models");

//!GET ALL SONGS
const getAllSongs = async (req, res) => {
  try {
    const songs = await model.Song.find();
    res.status(200).send(songs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET THREE SONGS
const getThreeSongs = async (req, res) => {
  try {
    const threeSongs = await model.Song.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).send(threeSongs);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!GET SONGS BY GENRE
const getSongsByGenre = async (req, res) => {
  const { genre } = req.params;

  try {
    const songs = await model.Song.find({ 'genre': genre });
    res.status(200).send(songs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET ALL SONGS FROM A PLAYLIST
const getAllSongsFromPlaylist = async (req, res) => {
  const { playlistID } = req.params;

  try {
    const songs = await model.Playlist.findById( playlistID ).populate('songList');
    res.status(200).send(songs.songList);
  } catch (error) {
    res.status(504).send({errMessage: 'Could not fetch songs', error:error});
  }
};

//!POST UPDATE PLAYLIST WITH A NEW SONG
const addSongToPlaylist = async (req, res) => {};

//!DELETE REMOVE SONG FROM PLAYLIST
const removeSongFromPlaylist = async (req, res) => {};

const getSongSearch = async (req, res) => {
  // const { id, search } = req.query;
  // try {
  //     if(id){
  //         const song = model.Song.findById(id)
  //         res.status(200).send(song);
  //     }
  //     if(search){
  //         const results =
  //     }
  // } catch (error) {
  // }
};

module.exports = {
  getAllSongs: getAllSongs,
  getThreeSongs: getThreeSongs,
  getSongsByGenre: getSongsByGenre,
  getAllSongsFromPlaylist: getAllSongsFromPlaylist,
  addSongToPlaylist: addSongToPlaylist,
  removeSongFromPlaylist: removeSongFromPlaylist,
};
