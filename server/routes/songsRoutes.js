//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songsController.js");
//!CLOUDINARY
const { upload } = require("../services/cloudinary");
const multipleUpload = upload.fields([
  { name: "songFile", maxCount: 1 },
  { name: "songImage", maxCount: 1 },
]);
//!CRUD
router.get("/", songsController.getAllSongs);
router.get("/threeSongs", songsController.getThreeSongs);
router.get("/genre/:genre", songsController.getSongsByGenre);
router.get("/searchedSongs", songsController.getSearchedSongs);
router.get("/playlist/:playlistID", songsController.getAllSongsFromPlaylist);
router.post("/playlist/:songID/:playlistID", songsController.addSongToPlaylist);
router.post("/searchedSongs/:songID", songsController.addToSearchedSongs);
router.post("/likedSongs/:songID", songsController.addSongToLikedPlaylist);
router.delete("/searchedSongs", songsController.removeSearchedSongs);
router.delete(
  "/likedSongs/:songID",
  songsController.removeSongFromLikedPlaylist
);
router.delete(
  "/playlist/:songID/:playlistID",
  songsController.removeSongFromPlaylist
);

//upload songs admin
router.post("/", multipleUpload, songsController.addSong);
module.exports = router;
