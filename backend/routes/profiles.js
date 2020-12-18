const express = require("express");

const profileController = require("../controllers/profiles");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extractFile, profileController.profileCreate);

router.put("/:id", checkAuth, extractFile, profileController.profileUpdate);

router.get("", checkAuth, profileController.profileGet);

router.get("/byUserId/", checkAuth, profileController.profileGetByUserId);

router.get("/:id", checkAuth, profileController.profileGetById);

router.delete("/:id", checkAuth, profileController.profileDelete);

module.exports = router;
