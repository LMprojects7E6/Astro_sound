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
//Middleware validate to access restricted resource
const validateToken = require("./middlewares/validateToken");

//!REQUIRE CONST ROUTES
const playlistsRoutes = require("./routes/playlistsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const songsRoutes = require("./routes/songsRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
//!ROUTES
app.use("/playlists", validateToken, playlistsRoutes);
app.use("/users", usersRoutes);
app.use("/songs", validateToken, songsRoutes);
app.use("/session", validateToken, sessionRoutes);

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
