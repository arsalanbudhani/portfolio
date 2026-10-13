import { Section } from "../components/Section";
import { images } from "../constants/assets";

const projects = Array.from({ length: 6 }, (_, i) => ({ id: i, image: images.placeholder }));

export const Showcase = () => {
  return (
    <Section id="showcase" title="Showcase">
      <div className="row row-cols-2 row-cols-md-3 g-3">
        {projects.map((project) => (
          <div className="col" key={project.id}>
            <img className="w-100" src={project.image} alt="Project preview" loading="lazy" />
          </div>
        ))}
      </div>
    </Section>
  );
};
