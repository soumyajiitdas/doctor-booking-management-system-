import React from "react";
import "../styles/Auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="auth-button">Login</button>
        </form>
        <p className="auth-switch">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;