const { Transaction } = require("../../models");

const deleteTransaction = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const res = await Transaction.findByIdAndRemove(_id);
    res.status(204).json({
      message: "Transaction deleted",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteTransaction;
