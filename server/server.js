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

//!SDK FIREBASE ADMIN
const admin = require("./config/firebaseConfig");
const { auth } = admin;

//TODO DELETE TEST
const User = require("./models/User");

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
