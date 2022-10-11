const dbModel = require("../models");

const getThreeSongs = async (req, res) => {
  try {
    const threeSongs = await dbModel.Song.aggregate([{ $sample: { size: 3 } }]);

    res.status(200).send(threeSongs);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getThreeSongs: getThreeSongs,
};
