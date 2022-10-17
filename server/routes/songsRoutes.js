//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const songsController =  require("../controllers/songsController.js");

//!CRUD
router.get("/", songsController.getAllSongs);
router.get("/threeSongs", songsController.getThreeSongs);
router.get("/:genre", songsController.getSongsByGenre);
router.get("/playlist/:playlistID", songsController.getAllSongsFromPlaylist);
router.post("/:songID/:playlistID", songsController.addSongToPlaylist);
router.delete("/:songID/:playlistID", songsController.removeSongFromPlaylist);

module.exports = router;
