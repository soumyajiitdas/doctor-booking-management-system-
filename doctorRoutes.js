const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Add a doctor
router.post("/add", doctorController.addDoctor);

// Get all doctors
router.get("/", doctorController.getDoctors);

// Update doctor
router.put("/:id", doctorController.updateDoctor);

// Delete doctor
router.delete("/:id", doctorController.deleteDoctor);

// Book doctor appointment
router.post("/book", doctorController.bookDoctor);

module.exports = router;