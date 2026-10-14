import { useState } from "react";
import { Section } from "../components/Section";
import { FORMSPREE_ENDPOINT } from "../constants/config";

const EMAIL = "arsalanbudhani43@gmail.com";

const details = [
  { icon: "bi-person-circle", text: "Muhammad Arsalan Budhani" },
  { icon: "bi-tag", text: "Full-Stack Developer" },
  { icon: "bi-envelope-at", text: EMAIL },
  { icon: "bi-phone", text: "+92-313-3124925" },
  { icon: "bi-whatsapp", text: "+92-300-4327985" },
  { icon: "bi-geo-alt", text: "Hyderabad, Sindh, Pakistan" },
];

const socials = [
  { icon: "bi-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/arsalan-budhani-63574b1a0" },
  { icon: "bi-github", label: "GitHub", href: "https://github.com/arsalanbudhani" },
];

export const Contact = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="row g-4">
        <div className="col-lg-5">
          {details.map(({ icon, text }) => (
            <h6 key={icon} className="text-break">
              <i className={`bi ${icon} text-accent me-1`}></i> {text}
            </h6>
          ))}
          <div className="d-flex flex-wrap gap-2 mt-3">
            {socials.map(({ icon, label, href }) => (
              <a key={icon} className="social-link" target="_blank" rel="noreferrer" href={href} aria-label={label}>
                <i className={`bi ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="col-lg-7">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
              <input type="text" id="inpName" name="name" className="form-control" placeholder="Enter Your Name" required />
              <label htmlFor="inpName">Full Name:</label>
            </div>
            <div className="form-floating mb-2">
              <input type="email" id="inpEmail" name="email" className="form-control" placeholder="Enter Your Email" required />
              <label htmlFor="inpEmail">Email Address:</label>
            </div>
            <div className="form-floating mb-2">
              <input type="text" id="inpSubject" name="subject" className="form-control" placeholder="Subject" />
              <label htmlFor="inpSubject">Subject:</label>
            </div>
            <textarea id="inpMessage" name="message" className="form-control mb-2" rows="3" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="btn btn-accent" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            <div aria-live="polite">
              {status === "sent" && (
                <p className="text-success mt-2 mb-0">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-danger mt-2 mb-0">
                  Sorry, your message couldn't be sent. Please email me directly at {EMAIL}.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
