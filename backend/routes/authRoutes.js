const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authController");

const authController = require("../controllers/authController");

console.log(authController);

router.post("/register", registerUser);

module.exports = router;