const express = require("express");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { usersCtrls: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/balance", auth, ctrlWrapper(ctrl.getBalance));

module.exports = router;
