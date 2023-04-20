const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { _id, name, email, image } = req.user;
  res.json({
    _id,
    name,
    email,
    image,
  });
};

module.exports = getCurrent;
