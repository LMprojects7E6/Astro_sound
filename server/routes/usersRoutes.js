//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController.js");

//!CRUD
router.get("/", userController.getUser);
router.post("/", userController.registerUser);
router.put("/", userController.updateUser);

module.exports = router;
