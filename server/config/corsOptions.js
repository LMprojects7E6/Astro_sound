module.exports = {
  //Allow to set cookies in header
  credentials: true,
  //allow petitions from this domain when deploying maybe change to actual domain name
  origin: process.env.CLIENT_URL,
};
