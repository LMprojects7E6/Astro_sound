const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    songFile: { type: String, required: [true, "Song file is required"] },
    title: { type: String, required: [true, "Title name is required"] },
    artist: { type: String, required: [true, "Artist name file is required"] },
    album: { type: String, required: [true, "Song name file is required"] },
    songImage: { type: String },
    genre: { type: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Song", songSchema);
