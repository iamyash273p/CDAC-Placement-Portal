import AdminNavbar from "../components/Navbar/mynav/AdminNavbar";
import AdminSidebar from "../components/Navbar/mynav/AdminSidebar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-shell">
        <AdminSidebar />
        <main className="admin-main">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
