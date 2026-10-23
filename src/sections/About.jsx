import { Section } from "../components/Section";
import { bio, interests } from "../constants/content";

export const About = () => {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
