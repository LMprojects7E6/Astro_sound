const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songsController");

//CRUD

router.get("/", songsController.getThreeSongs);

module.exports = router;
