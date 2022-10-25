const admin = require("../services/firebase");
const { cloudinary } = require("../services/cloudinary");
const deleteOldProfilePicture = async (req, res, next) => {
  try {
    const id = req.id;
    const user = await admin.auth().getUser(id);
    const { photoURL } = user;

    if (photoURL) {
      const imageToDelete = photoURL.split("/").at(-1).split(".").at(0);
      const isDeleted = await cloudinary.api.delete_resources(
        `profileImages/${imageToDelete}`
      );
      return next();
    } else {
      return next();
    }
  } catch (error) {
    return res.status(400).send("Cannot delete old picture");
  }
};

module.exports = deleteOldProfilePicture;
