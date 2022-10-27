//!IMPORT DEPENDENCIES
const { Router } = require("express");
const express = require("express");
const router = express.Router();
const playlistsController = require("../controllers/playlistsController.js");
const { upload } = require("../services/cloudinary");
const singleUpload = upload.single("playListImage");
//!CRUD
router.get("/", playlistsController.getAllPlaylists);
router.get("/likedPlaylist", playlistsController.getLikedPlaylists);
router.get("/fivePlaylists", playlistsController.getFivePlaylists);
router.get("/:playlistID", playlistsController.getPlaylistsByID);
router.post("/", singleUpload, playlistsController.createNewPlaylist);
router.put("/:playlistID", singleUpload, playlistsController.updatePlaylist);
router.delete("/:playlistID", playlistsController.deletePlaylist);

module.exports = router;
