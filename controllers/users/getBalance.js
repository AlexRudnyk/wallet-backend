const { User } = require("../../models");

const getBalance = async (req, res) => {
  const { _id: id } = req.user;

  const { balance } = await User.findById(id);

  res.json(balance);
};

module.exports = getBalance;
