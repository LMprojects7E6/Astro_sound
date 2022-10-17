//!CONNECTION TO MODELS
const model = require("../models");

//!POST CREATE NEW USER
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, _id } = req.body;
    const user = await model.User.create({
      _id: _id,
      firstName,
      lastName,
      email,
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
  //   const { userID } = req.id;
  //!CODE USED FOR TESTING
  const userID = "em8LNfILdNTc5mDQCmc1HxgGDmu1";

  try {
    const user = await model.User.findById(userID);
    res.status(200).send(user);
  } catch (error) {
    res.status(504).send({ errMessage: "Could not find user", error: error });
  }
};

//!PUT UPDATE USER
const updateUser = async (req, res) => {};

//!DELETE USER

module.exports = {
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
};
