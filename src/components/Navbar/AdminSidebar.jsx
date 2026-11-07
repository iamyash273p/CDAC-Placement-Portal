import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  const links = [
    { name: "Dashboard", path: "/admin" },
    { name: "Students", path: "/admin/students" },
    { name: "Recruiters", path: "/admin/recruiters" },
    { name: "Companies", path: "/admin/companies" },
    { name: "Jobs", path: "/admin/jobs" },
    { name: "Applications", path: "/admin/applications" },
  ];

  return (
    <aside className="admin-sidebar">
      <p className="admin-sidebar-title">ADMIN MENU</p>
      <nav className="admin-sidebar-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/admin"}
            className={({ isActive }) => isActive ? "admin-sidebar-link active" : "admin-sidebar-link"}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
export default AdminSidebar;
