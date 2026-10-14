import { Section } from "../components/Section";

const schools = [
  {
    period: "2017 - 2021",
    degree: "Bachelors in Engineering",
    field: "Computer Systems Engineering",
    institute: "Mehran University of Engineering and Technology, Jamshoro",
  },
  {
    period: "2015 - 2017",
    degree: "Intermediate",
    field: "Pre-Engineering",
    institute: "Government Boys Degree College, Qasimabad",
  },
  {
    period: "2012 - 2014",
    degree: "Matriculation",
    field: "Science Group",
    institute: "Army Public School And College System, Cantt, Hyderabad",
  },
];

export const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="row g-4">
        {schools.map((school) => (
          <div className="col-md-6" key={school.period}>
            <div className="timeline-card">
              <p className="text-accent fw-semibold">{school.period}</p>
              <h6>{school.degree}</h6>
              <p>{school.field}</p>
              <h6 className="mb-0">{school.institute}</h6>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
