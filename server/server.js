//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
