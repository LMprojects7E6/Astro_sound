//!CONNECTION TO MODELS
const model = require("../models");

//!GET ALL USER PLAYLISTS
const getAllPlaylists = async (req, res) => {
  const userID = req.id;
  //!CODE USED FOR TESTING
  // const userID = "em8LNfILdNTc5mDQCmc1HxgGDmu1";

  try {
    const playlistsArray = await model.User.findById(userID).populate(
      "playlists"
    );
    //GET PLAYLISTS OBJECTS
    if (playlistsArray != null) {
      const { playlists } = playlistsArray;
      res.status(200).send(playlists);
    } else res.status(200).send({ message: "User as no playlists" });
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET THE USERS LIKED PLAYLIST
const getLikedPlaylists = async (req, res) => {
  const userID = req.id;
  try {
    //Get 5 playlists from the user that isn't the favorite playlist
    const playlistsArray = await model.User.findById(userID).populate(
      "playlists",
      null,
      { name: "LikedPlaylist" }
    );

    //GET PLAYLISTS OBJECTS
    const { playlists } = playlistsArray;
    const songsArrayId = playlists[0].songList;
    const songs = await model.Song.find().where("_id").in(songsArrayId).exec();
    res.status(200).send(songs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET 5 PLAYLISTS FROM USER
const getFivePlaylists = async (req, res) => {
  const userID = req.id;
  //!CODE USED FOR TESTING
  // const userID = "em8LNfILdNTc5mDQCmc1HxgGDmu1";

  try {
    //Get 5 playlists from the user that isn't the favorite playlist
    const playlistsArray = await model.User.findById(userID).populate(
      "playlists",
      null,
      { name: { $ne: "LikedPlaylist" } },
      { limit: 5 }
    );
    //GET PLAYLISTS OBJECTS
    const { playlists } = playlistsArray;
    res.status(200).send(playlists);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET PLAYLISTS WITH ID
const getPlaylistsByID = async (req, res) => {
  const { playlistID } = req.params;

  try {
    const playlist = await model.Playlist.findById(playlistID);
    res.status(200).send(playlist);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!POST CREATE NEW PLAYLIST
const createNewPlaylist = async (req, res) => {
  const { PlaylistName, PlaylistDescription, playListImage } = req.body;
  const userID = req.id;
  //!CODE USED FOR TESTING
  // const userID = "em8LNfILdNTc5mDQCmc1HxgGDmu1";
  try {
    const user = await model.User.findById(userID);

    //Create playlist
    const playlist = await model.Playlist.create({
      name: PlaylistName,
      description: PlaylistDescription,
      createdBy: user.firstName,
      playListImage: playListImage,
    });
    await playlist.save();

    //Create playlists reference in User
    const userPlaylist = await model.User.findByIdAndUpdate(userID, {
      $push: { playlists: playlist.id },
    });
    await userPlaylist.save();

    res.status(200).send({ message: "Playlist Created" });
  } catch (error) {
    res
      .status(504)
      .send({ errorMsg: "Could not create Playlist", error: error });
  }
};

//!PUT UPDATE PLAYLIST WITH ID
const updatePlaylist = async (req, res) => {
  console.log(req.params.playlistID);
  console.log(req.body);

  try {
    const playlist = await model.Playlist.findByIdAndUpdate(
      req.params.playlistID,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(playlist);
  } catch (error) {
    res
      .status(504)
      .send({ errorMsg: "Could not update playlist", error: error });
  }
};

//!DELETE PLAYLIST
const deletePlaylist = async (req, res) => {
  const userID = req.id;
  // //!CODE USED FOR TESTING
  // const userID = "em8LNfILdNTc5mDQCmc1HxgGDmu1";
  const { playlistID } = req.params;
  console.log("enter delete");

  try {
    // Delete playlist from user
    const userPlaylist = await model.User.updateOne(
      { _id: userID },
      {
        $pull: {
          playlists: playlistID,
        },
      }
    );

    const playlist = await model.Playlist.findByIdAndRemove(playlistID);
    res.status(200).send(playlist);
  } catch (error) {
    res
      .status(504)
      .send({ errorMsg: "Could not delete playlist", error: error });
  }
};

module.exports = {
  getAllPlaylists: getAllPlaylists,
  getLikedPlaylists: getLikedPlaylists,
  getFivePlaylists: getFivePlaylists,
  getPlaylistsByID: getPlaylistsByID,
  createNewPlaylist: createNewPlaylist,
  updatePlaylist: updatePlaylist,
  deletePlaylist: deletePlaylist,
};
