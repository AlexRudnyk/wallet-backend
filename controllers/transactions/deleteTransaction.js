const { Transaction } = require("../../models");
const { User } = require("../../models");

const deleteTransaction = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  try {
    const deletedTransaction = await Transaction.findByIdAndRemove({
      _id: id,
    });

    const finalSum =
      deletedTransaction.type === "income"
        ? -deletedTransaction.sum
        : deletedTransaction.sum;

    await User.findByIdAndUpdate(
      { _id: owner },
      { $inc: { balance: finalSum } },
      { new: true }
    );

    res.json(deletedTransaction);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = deleteTransaction;
