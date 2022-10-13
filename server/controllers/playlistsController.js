//!CONNECTION TO MODELS
const model = require("../models");

//!GET ALL USER PLAYLISTS
const getAllPlaylists = async (req, res) => {
  // const { userID } = req.id;
//!CODE USED FOR TESTING
  const userID  = "6342151708c75ff62ab26e38";

  try {
    const playlistsArray = await model.User.findById(userID).populate("playlists");

    //GET PLAYLISTS OBJECTS
    const { playlists } = playlistsArray;
    res.status(200).send(playlists);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET THE USERS LIKED PLAYLIST
const getLikedPlaylists = async (req, res) => {
  // const { userID } = req.id;
//!CODE USED FOR TESTING
  const userID  = "6342151708c75ff62ab26e38";

  try {
    //Get 5 playlists from the user that isn't the favorite playlist
    const playlistsArray = await model.User.findById(userID).populate("playlists",null, {"name": "favorite"});

    //GET PLAYLISTS OBJECTS
    const { playlists } = playlistsArray;
    res.status(200).send(playlists);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET 5 PLAYLISTS FROM USER
const getFivePlaylists = async (req, res) => {
  // const { userID } = req.id;
//!CODE USED FOR TESTING
  const userID  = "6342151708c75ff62ab26e38";

  try {
    //Get 5 playlists from the user that isn't the favorite playlist
    const playlistsArray = await model.User.findById(userID).populate(
      "playlists",
      null,
      { name: { $ne: "favorite" } },
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

//!POST NEW PLAYLIST
const createPlaylist = async (req, res) => {
  const { Name, Description, CreatedBy, PlaylistImage } = req.body;
  // const { userID } = req.id;
//!CODE USED FOR TESTING
  const userID  = "6342151708c75ff62ab26e38";

  try {
    //Create playlist
    const playlist = await model.Playlist.create({
      Name,
      Description,
      CreatedBy,
      PlaylistImage,
    });
    await playlist.save();

    //Create playlists reference in User
    const userPlaylist = await model.User.findByIdAndUpdate(userID, {
      $push: { Playlists: playlist.id },
    });

    await userPlaylist.save();
    res.status(200).send({message: 'Playlist Created'});
  } catch (error) {
    res.status(504).send({errorMsg: 'Could not create Playlist', error:error});
  }
};

//!PUT UPDATE PLAYLIST WITH ID
const updatePlaylist = async (req, res) => {};

module.exports = {
  getAllPlaylists: getAllPlaylists,
  getLikedPlaylists: getLikedPlaylists,
  getFivePlaylists: getFivePlaylists,
  getPlaylistsByID: getPlaylistsByID,
  createPlaylist: createPlaylist,
  updatePlaylist: updatePlaylist,
};
