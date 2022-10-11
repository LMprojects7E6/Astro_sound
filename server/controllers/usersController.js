//!CONNECTION TO MODELS
const model = require("../models");
const admin = require("../config/firebaseConfig");
const { auth } = admin;
//!GET USER
const getUser = async (req, res) => {};

//!POST CREATE NEW USER
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Create user firebase
    const newFirebaseUser = await auth().createUser({
      email,
      password,
    });
    //Create user mongodb
    const user = await model.User.create({
      _id: newFirebaseUser.uid,
      firstName,
      lastName,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//!PUT UPDATE USER
const updateUser = async (req, res) => {};

module.exports = {
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
};
