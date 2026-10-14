import { Section } from "../components/Section";

const skills = [
  { name: "HTML / CSS", rating: 4 },
  { name: "JavaScript", rating: 3 },
  { name: "React JS", rating: 3 },
  { name: "Figma", rating: 4 },
  { name: "Adobe XD", rating: 4 },
  { name: "Mockflow", rating: 4 },
  { name: "Bootstrap", rating: 4 },
  { name: "ASP.NET / C#", rating: 2.5 },
  { name: "SQL", rating: 2.5 },
  { name: "PHP", rating: 2 },
];

const starClass = (rating, position) => {
  if (rating >= position) return "bi-star-fill";
  if (rating >= position - 0.5) return "bi-star-half";
  return "bi-star";
};

export const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-xl-5 g-3">
        {skills.map(({ name, rating }) => (
          <div className="col" key={name}>
            {name}
            <div>
              {[1, 2, 3, 4, 5].map((position) => (
                <i key={position} className={`bi ${starClass(rating, position)} me-1`}></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
