import React from "react";

function AdminNavbar() {
  return (
    <nav className="admin-navbar">
      <h2>CDAC Placement Portal</h2>

      <div className="admin-profile">
        <span>Admin</span>
        <button onClick={() => alert("Logout clicked")}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;