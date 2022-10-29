//!CONNECTION TO MODELS
const model = require("../models");
const admin = require("../services/firebase");
//!POST CREATE NEW USER
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, _id } = req.body;
    const user = await model.User.create({
      _id: _id,
      firstName,
      lastName,
    });

    //Create Liked Playlist
    const likedPlaylist = await model.Playlist.create({
      name: "LikedPlaylist",
      description: "Users favorite songs",
      createdBy: user.firstName,
      playlistImage: user.profileImage,
    });
    await likedPlaylist.save();

    //Add Liked playlist reference in User
    const userPlaylist = await model.User.findByIdAndUpdate(user.id, {
      $push: { playlists: likedPlaylist.id },
    });
    await userPlaylist.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(504).send(error);
  }
};

//!GET  GET USER
const getUser = async (req, res) => {
  const userID = req.id;

  try {
    const user = await model.User.findById(userID);
    res.status(200).send(user);
  } catch (error) {
    res.status(504).send({ errMessage: "Could not find user", error: error });
  }
};

//!PUT UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { file } = req;
    res.status(200).send(file.path);
  } catch (error) {
    res.status(400).send(error);
  }
};

//!DELETE USER

module.exports = {
  getUser: getUser,
  registerUser: registerUser,
  updateUser: updateUser,
};
