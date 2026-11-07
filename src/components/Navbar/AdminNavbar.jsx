import { AdminNavbar as SharedAdminNavbar } from "./Navbar";
export default function AdminNavbar() {
  function handleLogout() {
    window.location.href = "/login";
  }
  return <SharedAdminNavbar onLogout={handleLogout} />;
}
