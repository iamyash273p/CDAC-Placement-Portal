import { StudentNavbar } from "../components/Navbar/Navbar";
import "./PublicPages.css";

function Home() {
  return (
    <>
      <StudentNavbar />
      <main className="public-page">
        <section className="public-hero">
          <span className="public-eyebrow">CDAC PLACEMENT PORTAL</span>
          <h1>Your Next Career Opportunity Starts Here</h1>
          <p>Discover on-campus and off-campus placement opportunities, explore employers and stay updated on your applications.</p>
        </section>
        <section className="public-content-grid">
          <article className="public-info-card"><h2>Explore Opportunities</h2><p>Find relevant openings and review job details in one place.</p></article>
          <article className="public-info-card"><h2>Track Applications</h2><p>Keep track of the opportunities you have applied for.</p></article>
          <article className="public-info-card"><h2>Connect with Recruiters</h2><p>Discover companies looking for skilled CDAC candidates.</p></article>
        </section>
      </main>
    </>
  );
}
export default Home;
