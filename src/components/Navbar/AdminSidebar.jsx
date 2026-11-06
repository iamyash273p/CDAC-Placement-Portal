import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h3>ADMIN PANEL</h3>

      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/students">Students</Link></li>
        <li><Link to="/admin/recruiters">Recruiters</Link></li>
        <li><Link to="/admin/companies">Companies</Link></li>
        <li><Link to="/admin/jobs">Jobs</Link></li>
        <li><Link to="/admin/applications">Applications</Link></li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;