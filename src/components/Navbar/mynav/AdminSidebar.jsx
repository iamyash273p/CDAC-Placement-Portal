import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

const menuItems = [
  { label: "Dashboard", path: "/admin", icon: "▦", end: true },
  { label: "Students", path: "/admin/students", icon: "♙" },
  { label: "Recruiters", path: "/admin/recruiters", icon: "♧" },
  { label: "Companies", path: "/admin/companies", icon: "▤" },
  { label: "Jobs", path: "/admin/jobs", icon: "▣" },
  { label: "Applications", path: "/admin/applications", icon: "☷" },
];

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <p className="sidebar-heading">MAIN MENU</p>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) => `sidebar-link${isActive ? " active" : ""}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-note">
        <strong>Placement Portal</strong>
        <span>Manage placement activities in one place.</span>
      </div>
    </aside>
  );
}

export default AdminSidebar;
