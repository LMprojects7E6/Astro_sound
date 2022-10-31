const admin = require("firebase-admin");
const serviceAccount = require("../.firebase/serviceAccountKey.json");
// const { applicationDefault } = require("firebase-admin/app");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // applicationDefault()
});

module.exports = admin;
