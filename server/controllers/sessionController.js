const model = require("../models");
const getSessionRole = async (req, res, next) => {
  try {
    const { id } = req;
    const user = await model.User.findOne({ _id: id });
    res.status(200).send(user.role);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getSessionRole,
};
