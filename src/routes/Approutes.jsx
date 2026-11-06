import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminRegister from "../pages/AdminRegister";
import AdminDashboard from "../pages/AdminDashboard";
function AppRoutes() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>




    </BrowserRouter>
  );
}

export default AppRoutes;