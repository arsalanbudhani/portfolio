import { profile, socials } from "../constants/profile";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-2">
          {socials.map(({ icon, label, href }) => (
            <a key={icon} className="icon-link size-9 text-base" target="_blank" rel="noreferrer" href={href} aria-label={label}>
              <i className={`bi ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
