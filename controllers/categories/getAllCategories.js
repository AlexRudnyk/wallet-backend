const { Transaction } = require("../../models");

const getAllCategories = async (req, res) => {
  const { _id } = req.user;

  const income = await Transaction.aggregate([
    {
      $match: {
        owner: _id,
        type: "income",
      },
    },
    {
      $group: {
        _id: {
          type: "income",
          month: { $month: "$date" },
          year: { $year: "$date" },
        },
        totalSum: {
          $sum: "$sum",
        },
        category: {
          $push: {
            category: "$category",
            sum: "$sum",
          },
        },
      },
    },
  ]);

  const expense = await Transaction.aggregate([
    {
      $match: {
        owner: _id,
        type: "expense",
      },
    },
    {
      $group: {
        _id: {
          type: "expense",
          month: { $month: "$date" },
          year: { $year: "$date" },
        },
        totalSum: {
          $sum: "$sum",
        },
        category: {
          $push: {
            category: "$category",
            sum: "$sum",
          },
        },
      },
    },
  ]);

  const result = [...income, ...expense];

  res.json(result);
};

module.exports = getAllCategories;
