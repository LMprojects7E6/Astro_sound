//!CONNECTION TO MODELS
const model = require("../models");

//!GET PLAYLISTS
const getAllPlaylists = async (req, res) => {

    try {
        res.status(200).send("ok");
    } catch (error) {
        
    }
};

//!GET PLAYLISTS WITH ID
const getPlaylistsByID = async (req, res) => {
    try {
        res.status(200).send("ok");
    } catch (error) {
        
    }
};

//!POST NEW PLAYLIST
const createPlaylist = async (req, res) => {
    try {
        res.status(200).send("ok");
    } catch (error) {
        
    }
}

//!PUT UPDATE PLAYLIST WITH ID
const updatePlaylist = async (req, res) => {
    try {
        res.status(200).send("ok");
    } catch (error) {
        
    }
}

module.exports = {
    getAllPlaylists: getAllPlaylists,
    getPlaylistsByID: getPlaylistsByID,
    createPlaylist: createPlaylist,
    updatePlaylist: updatePlaylist
};