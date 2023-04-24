const express = require("express");
const { ctrlWrapper, auth, validation } = require("../../middlewares");
const { transactionJoiSchema } = require("../../models");
const { transactionsCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllTransactions));
// router.get("/month", auth, ctrlWrapper(ctrl.getTransactionsPerMonth));
// router.get("/income", auth, ctrlWrapper(ctrl.amoutIncome));

router.post(
  "/",
  auth,
  //   validation(transactionJoiSchema),
  ctrlWrapper(ctrl.addTransaction)
);

router.delete("/:id", auth, ctrlWrapper(ctrl.deleteTransaction));

module.exports = router;
