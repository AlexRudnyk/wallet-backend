const { Transaction } = require("../../models");

const getAllTransactions = async (req, res) => {
  const { _id: owner } = req.user;
  try {
    const allTransactions = await Transaction.find(
      { owner },
      "-createdAt -updatedAt"
    ).populate("owner", "_id name email");
    res.json(allTransactions);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getAllTransactions;
