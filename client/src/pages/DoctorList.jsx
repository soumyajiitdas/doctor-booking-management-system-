import React, { useState } from "react";
import "../styles/DoctorList.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Smith",
    specialty: "Cardiologist",
  },
  {
    id: 2,
    name: "Dr. Lisa Ray",
    specialty: "Dentist",
  },
  {
    id: 3,
    name: "Dr. John Doe",
    specialty: "Dermatologist",
  },
  {
    id: 4,
    name: "Dr. Jane Smith",
    specialty: "Pediatrician",
  },
];

function DoctorList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctor-list-container">
      <div className="doctor-list-header">
        <h2>Available Doctors</h2>
        <div className="doctor-search">
          <input
            type="text"
            placeholder="Search by name or specialty"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-avatar">👨‍⚕️</div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button className="btn">Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;