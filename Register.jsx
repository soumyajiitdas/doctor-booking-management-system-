import React from "react";
import "../styles/Auth.css";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="auth-button">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;