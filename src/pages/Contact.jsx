import { useState } from "react";
import { StudentNavbar } from "../components/Navbar/Navbar";
import "./PublicPages.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [notice, setNotice] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNotice("Your message form is ready. Connect the contact API to submit messages to the portal database.");
  }

  return (
    <>
      <StudentNavbar />
      <main className="public-page contact-page">
        <section className="public-hero contact-hero">
          <span className="public-eyebrow">WE'RE HERE TO HELP</span>
          <h1>Contact Us</h1>
          <p>Have a question about placements or using the portal? Send us a message.</p>
        </section>
        <section className="contact-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" />
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" />
            </div>
            <div className="contact-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} required placeholder="What is your query about?" />
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Write your message here" />
            </div>
            <button className="contact-submit" type="submit">Send Message</button>
            {notice && <p className="contact-notice">{notice}</p>}
          </form>
        </section>
      </main>
    </>
  );
}
export default Contact;
