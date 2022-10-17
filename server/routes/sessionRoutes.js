//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const getSession = require("../controllers/sessionController");

//!CRUD OPERATIONS
router.get("/", getSession.getSessionRole);
module.exports = router;
