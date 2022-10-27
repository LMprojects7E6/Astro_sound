const model = require("../models");
const getSessionRole = async (req, res, next) => {
  try {
    const { id } = req;
    const user = await model.User.findOne({ _id: id });
    res
      .status(200)
      .send({ role: user.role, id: user._id, firstName: user.firstName });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getSessionRole,
};
