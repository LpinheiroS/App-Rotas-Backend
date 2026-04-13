const express = require("express");
const router = express.Router();
const optimizeController = require("../../controllers/optimize/optimizeController");

router.post("/", optimizeController.optimizeRoute);

module.exports = router;
