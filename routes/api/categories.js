const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { categoriesCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAllCategories));

module.exports = router;
