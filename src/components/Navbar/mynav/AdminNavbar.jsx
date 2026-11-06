import "./AdminNavbar.css";

function AdminNavbar() {
  return (
    <header className="admin-navbar">
      <div className="navbar-brand">
        <div className="brand-mark">CP</div>
        <div>
          <h2>CDAC Placement Portal</h2>
          <span>Administration</span>
        </div>
      </div>

      <div className="navbar-user">
        <div className="avatar">A</div>
        <div className="user-details">
          <strong>Administrator</strong>
          <span>Admin account</span>
        </div>
        <button
          className="logout-button"
          onClick={() => window.alert("Connect this button to your logout function.")}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminNavbar;
