import React from "react";
import "../styles/Home.css";

function BookDoctor() {
  return (
    <div className="home-container">
      <h2>Book an Appointment</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Doctor Name" required />
        <input type="date" required />
        <button className="auth-button">Book Now</button>
      </form>
    </div>
  );
}

export default BookDoctor;