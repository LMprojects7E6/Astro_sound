//!IMPORT DEPENDENCIES
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController.js");
const validateToken = require("../middlewares/validateToken");
//!CLOUDINARY
const upload = require("../services/cloudinary");
const singleUpload = upload.single("profileImage");
//!CRUD
router.get("/", userController.getUser);
router.post("/", userController.registerUser);
router.put("/", validateToken, singleUpload, userController.updateUser);

module.exports = router;
