const Doctor = require("../models/Doctor");

// Add a new doctor
exports.addDoctor = async (req, res) => {
  try {
    const { name, specialization, diseases, availableDates } = req.body;
    const doctor = new Doctor({ name, specialization, diseases, availableDates });
    await doctor.save();
    res.status(201).json({ message: "Doctor added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update doctor info
exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor updated", doctor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Book doctor appointment
exports.bookDoctor = async (req, res) => {
  try {
    const { doctorId, date, disease } = req.body;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    // Check if doctor treats this disease
    if (!doctor.diseases.includes(disease.toLowerCase())) {
      return res.status(400).json({ message: "Doctor does not treat this disease" });
    }

    const selectedDate = new Date(date);
    const dateStr = selectedDate.toISOString();
    if (!doctor.availableDates.map(d => new Date(d).toISOString()).includes(dateStr)) {
      return res.status(400).json({ message: "Doctor not available on this date" });
    }

    // Assign serial number
    const serial = doctor.serialNumbers.length + 1;
    doctor.serialNumbers.push(serial);
    await doctor.save();

    res.json({ message: "Appointment booked", serial, date });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};