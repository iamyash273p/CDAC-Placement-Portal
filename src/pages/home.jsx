import { PublicNavbar } from "./components/navbar/navbar";
import AdminDashboard from "../pages/AdminDashboard";
function Home() {
  return (
    <>
      <PublicNavbar />
      <AdminDashboard/>
      <h1>Welcome to CDAC Placement Portal</h1>
    </>
  );
}

export default Home;