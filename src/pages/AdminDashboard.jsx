import AdminLayout from "../layouts/AdminLayout";
import "./AdminDashboard.css";

const stats = [
  { label: "Total Students", value: "120", note: "Registered students", icon: "♙" },
  { label: "Recruiters", value: "18", note: "Registered recruiters", icon: "♧" },
  { label: "Active Jobs", value: "25", note: "Currently available", icon: "▣" },
  { label: "Applications", value: "85", note: "Submitted applications", icon: "☷" },
];

const recentJobs = [
  { company: "TCS", role: "Java Developer", location: "Pune", status: "Active" },
  { company: "Infosys", role: "Software Engineer", location: "Bengaluru", status: "Active" },
  { company: "Wipro", role: "Full Stack Developer", location: "Mumbai", status: "Pending" },
  { company: "Tech Mahindra", role: "Graduate Engineer Trainee", location: "Pune", status: "Active" },
];

function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="page-heading">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h1>Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here is what's happening on your portal.</p>
        </div>
      </div>

      <section className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <div className="stat-top">
              <span>{stat.label}</span>
              <span className="stat-icon">{stat.icon}</span>
            </div>
            <strong className="stat-value">{stat.value}</strong>
            <span className="stat-note">{stat.note}</span>
          </article>
        ))}
      </section>

      <section className="content-panel">
        <div className="panel-heading">
          <div>
            <h2>Recent Job Postings</h2>
            <p>Latest opportunities added to the portal</p>
          </div>
          <a href="/admin/jobs">View all</a>
        </div>

        <div className="table-wrap">
          <table className="jobs-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Role</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job) => (
                <tr key={`${job.company}-${job.role}`}>
                  <td className="company-cell">{job.company}</td>
                  <td>{job.role}</td>
                  <td>{job.location}</td>
                  <td>
                    <span className={`status-pill ${job.status.toLowerCase()}`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <p className="demo-note">Demo data only — connect these values to your Express API and MySQL database.</p>
    </AdminLayout>
  );
}

export default AdminDashboard;
