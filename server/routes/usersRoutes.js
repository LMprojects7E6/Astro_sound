//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController.js");
//Middleware for create users
const checkBodyValues = require("../middlewares/checkBodyValues");

//!CRUD
router.get("/", checkBodyValues, userController.getUser);
router.post("/", userController.createUser);
router.put("/", userController.updateUser);

module.exports = router;
