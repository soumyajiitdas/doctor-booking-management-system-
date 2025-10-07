import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Live Chat</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-media-icons">
            <a href="/">f</a>
            <a href="/">t</a>
            <a href="/">i</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Doctor Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


