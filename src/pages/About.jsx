import { StudentNavbar } from "../components/Navbar/Navbar";
import "./PublicPages.css";

function About() {
  return (
    <>
      <StudentNavbar />
      <main className="public-page">
        <section className="public-hero">
          <span className="public-eyebrow">ABOUT THE PORTAL</span>
          <h1>Connecting CDAC Talent with Career Opportunities</h1>
          <p>CDAC Placement Portal brings students, recruiters and placement administrators together in one place.</p>
        </section>
        <section className="public-content-grid">
          <article className="public-info-card">
            <h2>Our Purpose</h2>
            <p>To make placement information easier to discover and manage for CDAC students, whether opportunities are on-campus or off-campus.</p>
          </article>
          <article className="public-info-card">
            <h2>What Students Can Do</h2>
            <p>Explore job openings, review eligibility details, apply for suitable opportunities and keep track of application progress.</p>
          </article>
          <article className="public-info-card">
            <h2>For Recruiters and Admins</h2>
            <p>Recruiters can share opportunities, while administrators can manage student, company, job and application information.</p>
          </article>
        </section>
      </main>
    </>
  );
}
export default About;
