import { Section } from "../components/Section";
import { images } from "../constants/assets";

export const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="row g-4 align-items-center">
        <div className="col-md-4 text-center">
          <img className="about-img" src={images.profile} alt="Muhammad Arsalan Budhani" loading="lazy" />
        </div>
        <p className="col-md-8 mb-0">
          I am a Full-Stack Developer, based in Pakistan. My professional skill is designing and developing sleek user interfaces, with the best possible user experience. I offer a very unique set of designing skills along with problem solving ability. I also possess knowledge on backend and database aspect as well, which makes me the best candidate to be the solid bridge during development.
          Please take some time to check out my work.
        </p>
      </div>
    </Section>
  );
};
