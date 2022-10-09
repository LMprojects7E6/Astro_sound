const mongoose = require("mongoose");

const connect = async () => {
  return await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected to the server successfully"))
    .catch((err) =>
      console.log(
        `Cannot connect to server please checkout your connection: ${err}`
      )
    );
};

module.exports = connect;
