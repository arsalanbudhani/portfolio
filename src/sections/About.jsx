import { Section } from "../components/Section";

const interests = [
  { icon: "bi-car-front", label: "Driving" },
  { icon: "bi-music-note-beamed", label: "Music" },
  { icon: "bi-controller", label: "Video gaming" },
  { icon: "bi-heart-pulse", label: "Fitness" },
];

export const About = () => {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I&apos;m a Software Engineer at Oxiliry, where I&apos;ve grown from an app development intern into an
            engineer who plans software architecture, designs interfaces and ships them to production.
          </p>
          <p>
            Most of my work sits where design meets code. I turn UI/UX designs into responsive, accessible frontends
            in React, and I&apos;m equally at home on the backend with C#, ASP.NET and SQL. That lets me be the bridge
            between design, frontend and data.
          </p>
          <p>
            I care about performance, thorough testing and smooth releases, and I keep learning to stay current with
            the tools and practices of the craft.
          </p>
        </div>
        <div className="card self-start">
          <h3 className="font-semibold">Outside of work</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {interests.map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <i className={`bi ${icon} text-accent dark:text-accent-light`}></i> {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
