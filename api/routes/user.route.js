const express = require("express");
const { test } = require("../controllers/user.controller");

const router = express.Router();

// Example route
router.get("/test", test);

module.exports = router;

