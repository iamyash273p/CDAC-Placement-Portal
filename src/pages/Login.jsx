import { useState } from "react";
import { PublicNavbar } from "../components/Navbar/Navbar";
import "./Login.css";

function Login() {
  const [loginType, setLoginType] = useState("student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const isStudent = loginType === "student";

  function switchLoginType() {
    setLoginType(isStudent ? "admin" : "student");
    setIdentifier("");
    setPassword("");
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Login form is ready. Backend authentication API is not connected yet.");
    // Later connect this form to your backend login API.
    // Student: send PRN and password. Admin: send email and password.
  }

  return (
    <div className="admin-register-page">
      <PublicNavbar />
      <main className="admin-register-main">
        <section className="admin-register-card login-card">
          <div className="admin-register-heading">
            <div className="admin-register-icon" aria-hidden="true">{isStudent ? "S" : "A"}</div>
            <span className="admin-register-eyebrow">CDAC PLACEMENT PORTAL</span>
            <h1>{isStudent ? "Student Login" : "Admin Login"}</h1>
            <p>{isStudent ? "Sign in using your PRN and password." : "Sign in to manage the placement portal."}</p>
          </div>

          <button className="login-switch" type="button" onClick={switchLoginType}>
            Switch to {isStudent ? "Admin" : "Student"} Login
            <span aria-hidden="true">↗</span>
          </button>

          <form className="admin-register-form" onSubmit={handleSubmit}>
            <div className="admin-form-field">
              <label htmlFor="login-identifier">{isStudent ? "PRN" : "Email address"}</label>
              <input
                id="login-identifier"
                type={isStudent ? "text" : "email"}
                name="identifier"
                placeholder={isStudent ? "Enter your PRN" : "admin@example.com"}
                value={identifier}
                onChange={(event) => { setIdentifier(event.target.value); setMessage(""); }}
                autoComplete={isStudent ? "username" : "email"}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => { setPassword(event.target.value); setMessage(""); }}
                autoComplete="current-password"
                required
              />
            </div>

            {message && <p className="admin-form-message success" role="status">{message}</p>}
            <button className="admin-register-submit" type="submit">
              Login as {isStudent ? "Student" : "Admin"} <span aria-hidden="true">→</span>
            </button>
          </form>
          <p className="admin-register-footer">Need help accessing your account? Contact the placement team.</p>
        </section>
        <p className="admin-register-note">Secure access · CDAC Placement Portal</p>
      </main>
    </div>
  );
}

export default Login;
