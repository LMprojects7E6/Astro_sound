const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Playlist name is required"] },
    description: { type: String, trim: true },
    createdBy: {
      type: String,
      required: [true, "Playlist creator name is required"],
    },
    songList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    playListImage: { type: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Playlist", playlistSchema);
