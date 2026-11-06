
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function BaseNavbar({ title, links, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        {title}
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {onLogout && (
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

// Public Navbar
export function PublicNavbar() {
  return (
    <BaseNavbar
      title="CDAC Portal"
      links={[
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" }
      ]}
    />
  );
}

// Student Navbar
export function StudentNavbar({ onLogout }) {
  return (
    <BaseNavbar
      title="Student Portal"
      onLogout={onLogout}
      links={[
        { name: "Dashboard", path: "/student" },
        { name: "Browse Jobs", path: "/student/jobs" },
        { name: "My Applications", path: "/student/applications" },
        { name: "My Profile", path: "/student/profile" }
      ]}
    />
  );
}

// Recruiter Navbar
export function RecruiterNavbar({ onLogout }) {
  return (
    <BaseNavbar
      title="Recruiter Portal"
      onLogout={onLogout}
      links={[
        { name: "Dashboard", path: "/recruiter" },
        { name: "Manage Jobs", path: "/recruiter/jobs" },
        { name: "Applicants", path: "/recruiter/applicants" },
        { name: "Company Profile", path: "/recruiter/profile" }
      ]}
    />
  );
}

// Admin Navbar
export function AdminNavbar({ onLogout }) {
  return (
    <BaseNavbar
      title="Admin Portal"
      onLogout={onLogout}
      links={[
        { name: "Dashboard", path: "/admin" },
        { name: "Students", path: "/admin/students" },
        { name: "Recruiters", path: "/admin/recruiters" },
        { name: "Jobs", path: "/admin/jobs" },
        { name: "Placement Drives", path: "/admin/drives" }
      ]}
    />
  );
}
