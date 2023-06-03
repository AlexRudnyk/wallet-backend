const { Transaction } = require("../../models");
const { User } = require("../../models");

const addTransaction = async (req, res) => {
  const body = req.body;
  const { type, sum } = body;
  const { _id: owner } = req.user;

  const finalSum = type === "income" ? sum : -sum;

  const user = await User.findByIdAndUpdate(
    { _id: owner },
    { $inc: { balance: finalSum.toFixed(2) } },
    { new: true }
  );

  const result = await Transaction.create({
    category: null,
    ...body,
    balance: user.balance.toFixed(2),
    owner,
  });

  res.status(201).json(result);
};

module.exports = addTransaction;
