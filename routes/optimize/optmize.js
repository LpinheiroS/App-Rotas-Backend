const express = require("express");
const router = express.Router();
const optimizeController = require("../../controllers/optimize/optimizeController");
const verifyToken = require("../../middleware/auth/verifyToken");

router.post("/", verifyToken, optimizeController.optimizeRoute);

module.exports = router;
