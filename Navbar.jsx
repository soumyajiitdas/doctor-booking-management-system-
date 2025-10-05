import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">MediBook</a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/doctors">Doctors</a>
        <a href="/book">Book</a>
        <a href="/admin">Admin</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;