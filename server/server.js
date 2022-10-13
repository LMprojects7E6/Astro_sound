//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//!CONNECTION DB
const connect = require("./config/db");
connect();

//!MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
const corsOptions = require("./config/corsOptions");
app.use(cors(corsOptions));

//!REQUIRE CONST ROUTES
const playlistsRoutes = require("./routes/playlistsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const songsRoutes = require("./routes/songsRoutes");

//!ROUTES
app.use("/playlists", playlistsRoutes);
app.use("/users", usersRoutes);
app.use("/songs", songsRoutes);
//!TEST
const validateToken = require("./middlewares/validateToken");
const model = require("./models");
app.get("/session", validateToken, async (req, res, next) => {
  try {
    console.log(req.id);
    const { id } = req;
    const user = await model.User.findOne({ _id: id });
    console.log(user);
    res.status(200).send(user.role);
  } catch (error) {
    res.status(400).send(error);
  }
});

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
