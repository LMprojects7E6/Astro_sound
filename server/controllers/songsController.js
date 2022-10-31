//!CONNECTION TO MODELS
const model = require("../models");
//!POST SONGS CLOUDINARY
const addSong = async (req, res, next) => {
  try {
    if (!req.files?.songFile || !req.files?.songImage) {
      res.status(400).send("Something went wrong try again!!");
    } else {
      const songFile = req.files.songFile[0].path;
      const songImage = req.files.songImage[0].path;
      const { artist, album, genre, title } = req.body;
      const song = await model.Song.create({
        songFile,
        title,
        artist,
        album,
        songImage,
        genre,
      });
      res.status(200).send("Song uploaded successfully");
    }
  } catch (error) {
    res.status(400).send("Something went wrong try again!!" + error);
  }
};
//!GET ALL SONGS
const getAllSongs = async (req, res) => {
  try {
    const songs = await model.Song.find();
    res.status(200).send(songs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET THREE SONGS
const getThreeSongs = async (req, res) => {
  try {
    const threeSongs = await model.Song.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).send(threeSongs);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

//!GET SONGS BY GENRE
const getSongsByGenre = async (req, res) => {
  const { genre } = req.params;

  try {
    const songs = await model.Song.find({ genre: genre });
    res.status(200).send(songs);
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!GET ALL SONGS FROM A PLAYLIST
const getAllSongsFromPlaylist = async (req, res) => {
  const { playlistID } = req.params;

  try {
    const songs = await model.Playlist.findById(playlistID).populate(
      "songList"
    );
    res.status(200).send(songs.songList);
  } catch (error) {
    res.status(504).send({ errMessage: "Could not fetch songs", error: error });
  }
};

//!POST UPDATE PLAYLIST WITH A NEW SONG
const addSongToPlaylist = async (req, res) => {
  const { playlistID } = req.params;
  const { songID } = req.params;

  try {
    const playlist = await model.Playlist.findById(playlistID);
    const songsInPlaylist = playlist.songList;
    const foundInPlaylist = songsInPlaylist.find((e) => e == songID);
    if (foundInPlaylist) {
      res.status(208).send(`Song already in  ${playlist.name}`);
    } else {
      const playlist = await model.Playlist.findByIdAndUpdate(playlistID, {
        $push: { songList: songID },
      });
      await playlist.save();

      res.status(200).send(`Song added to ${playlist.name}`);
    }
  } catch (error) {
    res
      .status(200)
      .send({ errMessage: "Song cannot be added to playlist", error: error });
  }
};

//!POST UPDATE LIKED PLAYLIST WITH A NEW SONG
const addSongToLikedPlaylist = async (req, res) => {
  const userID = req.id;
  const { songID } = req.params;

  try {
    //Get user
    const user = await model.User.findById(userID).populate("playlists", null, {
      name: "LikedPlaylist",
    });
    //Get liked playlist from user
    const likedPlaylist = user.playlists[0];
    //Add song to liked playlist
    const playlist = await model.Playlist.findByIdAndUpdate(likedPlaylist._id, {
      $push: { songList: songID },
    });
    await playlist.save();

    res.status(200).send(playlist);
  } catch (error) {
    res
      .status(200)
      .send({ errMessage: "Song cannot be added to playlist", error: error });
  }
};

//!DELETE SONG FROM LIKED PLAYLIST
const removeSongFromLikedPlaylist = async (req, res) => {
  const userID = req.id;
  const { songID } = req.params;

  try {
    //Get user
    const user = await model.User.findById(userID).populate("playlists", null, {
      name: "LikedPlaylist",
    });
    //Get liked playlist from user
    const likedPlaylist = user.playlists[0];
    //Add song to liked playlist
    const playlist = await model.Playlist.findByIdAndUpdate(likedPlaylist._id, {
      $pull: { songList: songID },
    });
    await playlist.save();

    res.status(200).send(playlist);
  } catch (error) {
    res.status(200).send({
      errMessage: "Song cannot be removed from playlist",
      error: error,
    });
  }
};

//!DELETE REMOVE SONG FROM PLAYLIST
const removeSongFromPlaylist = async (req, res) => {
  const { playlistID } = req.params;
  const { songID } = req.params;
  console.log(playlistID);
  console.log(songID);

  try {
    // Delete song from playlist
    const playlist = await model.Playlist.updateOne(
      { _id: playlistID },
      {
        $pull: {
          songList: songID,
        },
      }
    );
    res.status(200).send(playlist);
  } catch (error) {
    res
      .status(504)
      .send({ errMessage: "Could not remove the song", error: error });
  }
};

//!GET SEARCHED SONGS
const getSearchedSongs = async (req, res) => {
  const userID = req.id;

  try {
    const searchedSongsArray = await model.User.findById(userID).populate(
      "searchedSongs"
    );
    //GET PLAYLISTS OBJECTS
    if (searchedSongsArray != null) {
      const { searchedSongs } = searchedSongsArray;
      res.status(200).send(searchedSongs);
    } else res.status(200).send({ message: "User has no recent searches" });
  } catch (error) {
    res.status(504).send({ message: error.message });
  }
};

//!POST SEARCHED SONGS
const addToSearchedSongs = async (req, res) => {
  const userID = req.id;
  const { songID } = req.params;

  try {
    const user = await model.User.findById(userID);
    const searchedSongs = user.searchedSongs;

    const found = searchedSongs.find((element) => element._id == songID);

    if (found) {
      res.status(200).send(searchedSongs);
    } else {
      //Add song to recent searches
      const searchedSongs = await model.User.findByIdAndUpdate(userID, {
        $push: { searchedSongs: songID },
      });
      await searchedSongs.save();

      res.status(200).send(searchedSongs);
    }
  } catch (error) {
    res.status(200).send({
      errMessage: "Song cannot be added to recent searches",
      error: error,
    });
  }
};

const removeSearchedSongs = async (req, res) => {
  const userID = req.id;

  try {
    //Remove  recent searches
    const searchedSongs = await model.User.findByIdAndUpdate(userID, {
      $set: {
        searchedSongs: [],
      },
    });
    await searchedSongs.save();
    res.status(200).send("Searched songs has been removed");
  } catch (error) {
    res.status(200).send({
      errMessage: "cannot remove searched songs",
      error: error,
    });
  }
};

module.exports = {
  addSong: addSong,
  getAllSongs: getAllSongs,
  getThreeSongs: getThreeSongs,
  getSongsByGenre: getSongsByGenre,
  getAllSongsFromPlaylist: getAllSongsFromPlaylist,
  addSongToPlaylist: addSongToPlaylist,
  addSongToLikedPlaylist: addSongToLikedPlaylist,
  removeSongFromLikedPlaylist: removeSongFromLikedPlaylist,
  removeSongFromPlaylist: removeSongFromPlaylist,
  getSearchedSongs: getSearchedSongs,
  addToSearchedSongs: addToSearchedSongs,
  removeSearchedSongs: removeSearchedSongs,
};
