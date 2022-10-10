//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const songsController =  require("../controllers/songs-controller.js");

//!CRUD
router.get("/", songsController.getAllSongs());
router.get("/", songsController.getThreeSongs());
router.get("/:genre", songsController.getSongsByGenre());
router.get("/:playlistID", songsController.getAllSongsFromPlaylist());
router.post("/:playlistID", songsController.addSongToPlaylist());
router.delete("/:SongID", songsController.removeSongFromPlaylist());

module.exports = router;
