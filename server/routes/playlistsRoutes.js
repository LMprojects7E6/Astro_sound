//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const playlistsController = require("../controllers/playlistsController.js");
const deleteOldPlaylistImage = require("../middlewares/deleteOldPlaylistImage.js");
const { upload } = require("../services/cloudinary");
const singleUpload = upload.single("playListImage");
//!CRUD
router.get("/", playlistsController.getAllPlaylists);
router.get("/likedPlaylist", playlistsController.getLikedPlaylists);
router.get("/fivePlaylists", playlistsController.getFivePlaylists);
router.get("/:playlistID", playlistsController.getPlaylistsByID);
router.post("/", singleUpload, playlistsController.createNewPlaylist);
router.put(
  "/:playlistID",
  singleUpload,
  deleteOldPlaylistImage,
  playlistsController.updatePlaylist
);
router.put(
  "/noImage/:playlistID",
  upload.none(),
  playlistsController.updatePlaylistNameDescription
);

router.delete("/:playlistID", playlistsController.deletePlaylist);

module.exports = router;
