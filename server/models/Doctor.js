const mongoose = require("mongoose");

// Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: true
  },
  diseases: {
    type: [String], // Array of diseases the doctor treats
    required: true
  },
  availableDates: {
    type: [Date], // Array of available dates
    required: true
  },
  serialNumbers: {
    type: [Number], // Track serial numbers for appointments
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Doctor", doctorSchema);