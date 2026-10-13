import { Section } from "../components/Section";

const jobs = [
  {
    period: "November-2022 to Present",
    company: "Basecamp Data Solutions",
    location: "Hyderabad, Sindh, Pakistan",
    role: "Junior Front End Developer",
    responsibilities: "Designing website mockup, wireframing those designs on professional platforms such as Figma, Adobe XD, Mockflow etc. Implementing those designs on frontend side, using core CSS and/or various JS liabraries, on React JS environment.",
  },
  {
    period: "June-2022 to October-2022",
    company: "Basecamp Data Solutions",
    location: "Hyderabad, Sindh, Pakistan",
    role: "Web/App Development Intern",
    responsibilities: "Developing programs on ASP.NET platform using C# as backend language, on webforms and developing desktop applications as well. Learning about SQL database and connecting it with the programs to utilize that data.",
  },
  {
    period: "April-2021 to September-2021",
    company: "Geekistan",
    location: "Hyderabad, Sindh, Pakistan",
    role: "Web Designing and Development Intern",
    responsibilities: "Worked on the basics of HTML/CSS, Javascript, Ajax, PHP and Database Management. Developed a few projects on my own, handling it's backend, frontend and database as well.",
  },
];

export const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-md-6" key={job.period}>
            <div className="timeline-card">
              <p className="text-accent fw-semibold">{job.period}</p>
              <h6>{job.company}</h6>
              <p>{job.location}</p>
              <h6>{job.role}</h6>
              <span className="fw-semibold">Key Responsibilities:</span>
              <p className="mb-0">{job.responsibilities}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
