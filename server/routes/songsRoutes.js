//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songsController.js");
//!CLOUDINARY
const upload = require("../services/cloudinary");
const multipleUpload = upload.fields([
  { name: "songFile", maxCount: 1 },
  { name: "songImage", maxCount: 8 },
]);
//!CRUD
router.get("/", songsController.getAllSongs);
router.get("/threeSongs", songsController.getThreeSongs);
router.get("/:genre", songsController.getSongsByGenre);
router.get("/playlist/:playlistID", songsController.getAllSongsFromPlaylist);
router.post("/:songID/:playlistID", songsController.addSongToPlaylist);
router.post("/:songID", songsController.addSongToLikedPlaylist);
router.delete("/:songID", songsController.removeSongFromLikedPlaylist);
router.delete("/:songID/:playlistID", songsController.removeSongFromPlaylist);
//upload songs admin
router.post("/", multipleUpload, songsController.addSong);
module.exports = router;
