import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MediBook</h1>
          <p>Find the best doctors near you and book appointments easily.</p>
        </div>
        <div className="hero-image-container">
          <img src="https://i.pinimg.com/1200x/5a/b2/d2/5ab2d255eb0fe0bdb4b9a7167df82f29.jpg" alt="Doctor" className="hero-image" />
        </div>
      </div>

      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Search for Doctors</h3>
            <p>Find doctors by specialty, location, and availability.</p>
          </div>
          <div className="feature-card">
            <h3>Book Appointments</h3>
            <p>Book appointments with your chosen doctor in just a few clicks.</p>
          </div>
          <div className="feature-card">
            <h3>View Doctor Profiles</h3>
            <p>View detailed profiles of doctors and their qualifications.</p>
          </div>
        </div>
      </div>

      <div className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <p>Search for a doctor.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Book an appointment.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>Get a confirmation.</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Patients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"This is the best app for booking doctor appointments. It's so easy to use!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"I found a great doctor near me in just a few minutes. Highly recommended!"</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;