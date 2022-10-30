const { cloudinary } = require("../services/cloudinary");
const model = require("../models");
const deleteOldPlaylistImage = async (req, res, next) => {
  try {
    if (req.file) {
      const id = req.params.playlistID;
      const playlistID = await model.Playlist.findById(id);
      const imageToDelete = playlistID.playListImage
        .split("/")
        .at(-1)
        .split(".")
        .at(0);
      await cloudinary.api.delete_resources(`playListImages/${imageToDelete}`);
      return next();
    }
  } catch (error) {
    return res.status(400).send("Error with images " + error);
  }
};

module.exports = deleteOldPlaylistImage;
