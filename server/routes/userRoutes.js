const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User registration
router.post("/register", userController.registerUser);

// User login
router.post("/login", userController.loginUser);

// Get all users
router.get("/", userController.getUsers);

module.exports = router;