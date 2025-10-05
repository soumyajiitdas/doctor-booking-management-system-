import React from "react";
import "../styles/Home.css";

function DoctorList() {
  return (
    <div className="home-container">
      <h2>Available Doctors</h2>
      <div className="doctor-grid">
        <div className="doctor-card">
          <img src="https://via.placeholder.com/100" alt="Doctor" />
          <h3>Dr. Smith</h3>
          <p>Cardiologist</p>
        </div>
        <div className="doctor-card">
          <img src="https://via.placeholder.com/100" alt="Doctor" />
          <h3>Dr. Lisa Ray</h3>
          <p>Dentist</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorList;