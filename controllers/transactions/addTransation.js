const { Transaction } = require("../../models");

const addTransaction = async (req, res) => {
  const body = req.body;
  const { _id: owner } = req.user;
  try {
    const transaction = await Transaction.create({ ...body, owner });
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addTransaction;
