require("dotenv").config();
//!DEPENDENCIES
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//!OPTIONS
const checkTypes = (req, file, cb) => {
  const type = file.mimetype.split("/")[0];
  const fileName = file.fieldname;
  if ((fileName === "songFile" && type === "audio") || type === "video") {
    cb(null, true);
  } else if (fileName === "songImage" && type == "image") {
    cb(null, true);
  } else if (fileName === "playListImage" && type == "image") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
//!CONFIGURE STORAGE
//Define where to store in this case in cloudinary and pass to multer to upload
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    resource_type: "auto",
    allowedFormats: ["jpeg", "png", "jpg", "mp4", "mp3"],
    //name of folder in cloudinary is the same as the name of input sended
    folder: (req, file) => `${file.fieldname}s`,
  },
});

//!UPLOAD FILE
const upload = multer({ storage: storage, fileFilter: checkTypes });

module.exports = upload;
