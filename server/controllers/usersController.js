//!CONNECTION TO MODELS
const model = require("../models");
const admin = require("../config/firebaseConfig");
const { auth } = admin;
//!GET USER
const getUser = async (req, res) => {};

//!POST CREATE NEW USER
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, _id } = req.body;
    console.log(_id, firstName);
    const user = await model.User.create({
      _id: _id,
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
