import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminRecruiters from "./pages/AdminRecruiters";
import AdminCompanies from "./pages/AdminCompanies";
import AdminJobs from "./pages/AdminJobs";
import AdminApplications from "./pages/AdminApplications";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/recruiters" element={<AdminRecruiters />} />
        <Route path="/admin/companies" element={<AdminCompanies />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
