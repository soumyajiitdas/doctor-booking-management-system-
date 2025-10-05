const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const adminAuth = require("../middleware/adminAuth");

// Admin login
router.post("/login", adminController.loginAdmin);

// Admin dashboard (protected)
router.get("/dashboard", adminAuth, (req, res) => {
  res.json({ message: "Welcome to admin dashboard", admin: req.admin });
});

module.exports = router;