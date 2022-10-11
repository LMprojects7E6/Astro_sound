const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    _id: { type: String },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      lowercase: true,
      trim: true,
    },
    currentSong: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
    profileImage: {
      type: String,
    },
    searchedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    role: {
      type: String,
      default: "user",
    },
  },
  { _id: false }
);

module.exports = mongoose.model("User", userSchema);
