import { useState } from "react";

export const ThemeToggle = () => {
  // index.html sets the initial class before React mounts.
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode); the choice just won't persist.
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i className={`bi ${dark ? "bi-sun" : "bi-moon-stars"}`}></i>
    </button>
  );
};
