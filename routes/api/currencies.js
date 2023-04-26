const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { currenciesCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getCurrency));

module.exports = router;
