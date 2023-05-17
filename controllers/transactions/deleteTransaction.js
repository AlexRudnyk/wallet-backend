const { Transaction } = require("../../models");

const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransaction = await Transaction.findByIdAndRemove({
      _id: id,
    });
    res.json(deletedTransaction);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteTransaction;
