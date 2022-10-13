//!CONNECTION TO MODELS
const model = require("../models");

//!GET USER
const getUser = async (req, res) => {
  //   const { userID } = req.id;
  //!CODE USED FOR TESTING
  const userID = "6342151708c75ff62ab26e38";

  try {
    const user = await model.User.findById(userID);
    res.status(200).send(user);
  } catch (error) {
    res.status(504).send({ errMessage: "Could not find user", error: error });
  }
};

//!POST CREATE NEW USER
const createUser = async (req, res) => {
  const { firstName, lastName, email, password, profileImage } = req.body;

  try {
    const user = await model.User.create({
      firstName,
      lastName,
      email,
      password,
      profileImage,
    });
    await user.save();

    const likedPlaylist = await model.Playlist.create({
      name: "LikedPlaylist",
      description: "Users favorite songs",
      createdBy: user.firstName,
      playlistImage: user.profileImage,
    });
    await likedPlaylist.save();

    //Create liked playlist reference in User
    const userPlaylist = await model.User.findByIdAndUpdate(user.id, {
      $push: { playlists: likedPlaylist.id },
    });
    await userPlaylist.save();

    res.status(200).send({ user });
  } catch (error) {
    res.status(504).send({ errMessage: "Create user failed", error: error });
  }
};

//!PUT UPDATE USER
const updateUser = async (req, res) => {};

module.exports = {
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
};
