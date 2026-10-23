import { Section } from "../components/Section";
import { skillGroups } from "../constants/content";

export const Skills = () => {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map(({ icon, title, skills }) => (
          <div key={title} className="card">
            <h3 className="flex items-center gap-3 font-semibold">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-sky-50 text-accent dark:bg-sky-950 dark:text-accent-light">
                <i className={`bi ${icon}`}></i>
              </span>
              {title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="chip">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
