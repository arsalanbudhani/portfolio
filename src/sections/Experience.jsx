import { Section } from "../components/Section";

const jobs = [
  {
    period: "Nov 2022 – Present",
    company: "Oxiliry",
    role: "Software Engineer",
    highlights: [
      "Plan and design software architecture and user interfaces.",
      "Convert UI/UX designs into functional, responsive frontend code aligned with project requirements.",
      "Improve performance and optimize existing software systems.",
      "Identify and resolve bugs to keep applications running smoothly.",
      "Collaborate with cross-functional teams to deliver integrated solutions.",
      "Run thorough testing and manage deployments for reliable production releases.",
    ],
  },
  {
    period: "Jun 2022 – Oct 2022",
    company: "Oxiliry",
    role: "App Development Intern",
    highlights: [
      "Gained hands-on experience under mentorship and project guidance.",
      "Explored and worked with new technologies and frameworks.",
      "Maintained clear communication with team members and supervisors.",
    ],
  },
  {
    period: "Mar 2021 – Sep 2021",
    company: "Geekistan",
    role: "Web Development Intern",
    highlights: [
      "Supported the web development team with tasks and feature implementations.",
      "Developed assigned features and functionality within web applications.",
      "Contributed to team meetings and collaborative sessions.",
      "Documented code, processes and project information.",
    ],
  },
];

export const Experience = () => {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-12 border-s border-zinc-200 ps-8 dark:border-zinc-800">
        {jobs.map((job) => (
          <li key={job.period} className="relative">
            <span className="absolute -start-[2.4rem] top-1.5 size-3 rounded-full bg-accent ring-4 ring-white dark:bg-accent-light dark:ring-zinc-950"></span>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold">
              {job.role} <span className="text-accent dark:text-accent-light">· {job.company}</span>
            </h3>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <i className="bi bi-check2 mt-0.5 text-accent dark:text-accent-light"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
};
