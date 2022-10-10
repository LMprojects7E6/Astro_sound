const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
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
});

module.exports = mongoose.model("User", userSchema);
