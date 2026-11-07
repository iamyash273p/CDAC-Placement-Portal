import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ title, links, showLogin = false, onLogout }) {
  return (
    <nav className="portal-navbar">
      <NavLink to="/" className="portal-brand">{title}</NavLink>
      <div className="portal-nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) => isActive ? "portal-nav-link active" : "portal-nav-link"}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      {showLogin && <NavLink to="/login" className="portal-login-link">Login</NavLink>}
      {onLogout && <button className="portal-logout-btn" onClick={onLogout}>Logout</button>}
    </nav>
  );
}

// Student-facing navbar used on every non-admin page.
export function StudentNavbar({ onLogout }) {
  return (
    <Navbar
      title="CDAC Placement Portal"
      onLogout={onLogout}
      links={[
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ]}
      showLogin={!onLogout}
    />
  );
}

// Keep this export so existing pages importing PublicNavbar continue to work.
export function PublicNavbar() {
  return <StudentNavbar />;
}

export function AdminNavbar({ onLogout }) {
  return (
    <Navbar
      title="CDAC Placement Portal"
      onLogout={onLogout || (() => { window.location.href = "/login"; })}
      links={[
        { name: "Admin Panel", path: "/admin" },
      ]}
    />
  );
}
