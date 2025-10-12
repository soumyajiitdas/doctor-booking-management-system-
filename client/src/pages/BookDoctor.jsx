import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BookDoctor.css";

function BookDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [disease, setDisease] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch doctors
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/api/doctors");
        setDoctors(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDoctors();

    // Get user from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
    setSelectedDate("");
    setDisease("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/doctors/book", {
        doctorId: selectedDoctor,
        date: selectedDate,
        disease,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const selectedDoctorData = doctors.find((doc) => doc._id === selectedDoctor);

  return (
    <div className="home-container">
      <div className="booking-form-container">
        <h2>Book an Appointment</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Select a Doctor</label>
            <select onChange={handleDoctorChange} value={selectedDoctor} required>
              <option value="">Select a Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name} - {doctor.specialization}
                </option>
              ))}
            </select>
          </div>
          {selectedDoctorData && (
            <>
              <div className="form-group">
                <label>Medical Condition</label>
                <select onChange={(e) => setDisease(e.target.value)} value={disease} required>
                  <option value="">Select a disease</option>
                  {selectedDoctorData.diseases.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Select a Date</label>
                <select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} required>
                  <option value="">Select a Date</option>
                  {selectedDoctorData.availableDates.map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          <button className="auth-button">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookDoctor;