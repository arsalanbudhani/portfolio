import { useState } from "react";
import { Section } from "../components/Section";
import { FORMSPREE_ENDPOINT } from "../constants/config";
import { profile } from "../constants/profile";

const details = [
  { icon: "bi-envelope", label: "Email", text: profile.email, href: `mailto:${profile.email}` },
  { icon: "bi-telephone", label: "Phone", text: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
  { icon: "bi-geo-alt", label: "Location", text: profile.location },
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
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div>
          <p className="text-lg leading-relaxed">
            Have a role, a project or just a question? Send me a message and I&apos;ll get back to you.
          </p>
          <ul className="mt-8 space-y-5">
            {details.map(({ icon, label, text, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-accent dark:bg-sky-950 dark:text-accent-light">
                  <i className={`bi ${icon}`}></i>
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium break-words text-zinc-900 hover:text-accent dark:text-zinc-100 dark:hover:text-accent-light">
                      {text}
                    </a>
                  ) : (
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Name</span>
              <input type="text" name="name" className="input mt-1.5" placeholder="Your name" required />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Email</span>
              <input type="email" name="email" className="input mt-1.5" placeholder="you@example.com" required />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Subject</span>
            <input type="text" name="subject" className="input mt-1.5" placeholder="What's this about?" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Message</span>
            <textarea name="message" className="input mt-1.5" rows="5" placeholder="Your message" required></textarea>
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"} <i className="bi bi-send"></i>
          </button>
          <div aria-live="polite">
            {status === "sent" && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400">Thanks! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Sorry, your message couldn&apos;t be sent. Please email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="text-link">{profile.email}</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
};
