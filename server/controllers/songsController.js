//!CONNECTION TO MODELS
const model = require("../models");

//!POST SONGS CLOUDINARY
const addSong = async (req, res, next) => {
  try {
    if (!req.files?.songFile || !req.files?.songImage) {
      res.status(400).send("No files passed");
    } else {
      res.status(200).send("Song uploaded successfully");
    }
  } catch (error) {
    console.log(error.message);
  }
};

//!GET SONGS
const getAllSongs = async (req, res) => {};

//!GET RANDOM SONGS
const getThreeSongs = async (req, res) => {};

//!GET SONGS BY GENRE
const getSongsByGenre = async (req, res) => {};

//!GET ALL SONGS FROM A PLAYLIST
const getAllSongsFromPlaylist = async (req, res) => {};

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
  addSong: addSong,
  getAllSongs: getAllSongs,
  getThreeSongs: getThreeSongs,
  getSongsByGenre: getSongsByGenre,
  getAllSongsFromPlaylist: getAllSongsFromPlaylist,
  addSongToPlaylist: addSongToPlaylist,
  removeSongFromPlaylist: removeSongFromPlaylist,
};
