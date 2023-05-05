const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { _id, name, email, image, balance } = req.user;
  res.json({
    _id,
    name,
    email,
    image,
    balance,
  });
};

module.exports = getCurrent;
