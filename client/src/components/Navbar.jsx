import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">MediBook</a>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/doctors">Doctors</a>
        <a href="/book">Book</a>
        <a href="/admin">Admin</a>
        <a href="/login" className="login-button">Login</a>
        <a href="/book" className="navbar-button">Book Now</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;