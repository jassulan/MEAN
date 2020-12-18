const express = require("express");

const scriptController = require("../controllers/scripts");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", checkAuth, scriptController.scriptGet);

router.post("", scriptController.scriptCreate);

///router.delete("/:id", scriptController.scriptDelete);

module.exports = router;
