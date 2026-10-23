import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const linkClass = (active) =>
  active
    ? "text-accent dark:text-accent-light"
    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    ["home", ...links.map(({ id }) => id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          AB<span className="text-accent dark:text-accent-light">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={`text-sm font-medium transition-colors ${linkClass(active === id)}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <span className="ms-4 hidden h-5 w-px bg-zinc-200 md:block dark:bg-zinc-800"></span>
          <div className="md:ms-3">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-xl text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-zinc-200 px-4 py-2 md:hidden dark:border-zinc-800">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 font-medium ${linkClass(active === id)}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
