import { Section } from "../components/Section";
import { schools } from "../constants/content";

export const Education = () => {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      {schools.map((school) => (
        <div key={school.degree} className="card grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{school.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{school.degree}</h3>
            <p className="mt-2">{school.institute}</p>
          </div>
          <div className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-800/50">
            <p className="text-sm font-semibold tracking-wider text-accent uppercase dark:text-accent-light">
              Final year project
            </p>
            <h4 className="mt-2 font-semibold">{school.project.title}</h4>
            <p className="mt-2 text-sm leading-relaxed">{school.project.description}</p>
          </div>
        </div>
      ))}
    </Section>
  );
};
