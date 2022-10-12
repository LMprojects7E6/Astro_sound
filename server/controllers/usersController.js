//!CONNECTION TO MODELS
const model = require("../models");

//!GET USER
const getUser = async (req, res) => {
    const { userID } = req.id;

};

//!POST CREATE NEW USER
const createUser = async (req, res) => {

}

//!PUT UPDATE USER
const updateUser = async (req, res) => {

}

module.exports = {
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser
};