import { images, docs } from "../constants/assets";
import { profile, socials } from "../constants/profile";

export const Home = () => {
  return (
    <section id="home" className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:py-28">
      <div className="order-2 md:order-1">
        <p className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <i className="bi bi-geo-alt"></i> {profile.location}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I&apos;m Arsalan.
          <span className="block text-accent dark:text-accent-light">{profile.title}.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          I build fast, responsive web applications, from pixel-perfect React frontends to the ASP.NET services and
          SQL databases behind them.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Get in touch <i className="bi bi-arrow-right"></i>
          </a>
          <a href={docs.resume} target="_blank" rel="noreferrer" className="btn-secondary">
            <i className="bi bi-download"></i> Download CV
          </a>
        </div>
        <div className="mt-8 flex gap-2">
          {socials.map(({ icon, label, href }) => (
            <a key={icon} className="icon-link" target="_blank" rel="noreferrer" href={href} aria-label={label}>
              <i className={`bi ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="order-1 mx-auto size-56 overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-zinc-200 sm:size-64 md:order-2 lg:size-80 dark:bg-zinc-900 dark:ring-zinc-800">
        <img
          src={images.profile}
          alt={profile.name}
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};
