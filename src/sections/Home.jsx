import { images, docs } from "../constants/assets";

export const Home = () => {
  return (
    <section id="home" className="section p-0">
      <div className="row g-0 align-items-center">
        <div className="col-md-7 order-2 order-md-1 p-4 p-lg-5">
          <h5 className="text-accent">I am</h5>
          <h4>Muhammad Arsalan Budhani</h4>
          <h5>Full-Stack Developer</h5>
        </div>
        <div className="col-md-5 order-1 order-md-2">
          <img className="hero-img" src={images.placeholder} alt="" />
        </div>
      </div>
      <div className="btn-group w-100">
        <a target="_blank" rel="noreferrer" href={docs.resume} className="btn btn-dark rounded-0 p-2">
          <i className="bi bi-download"></i> Resume
        </a>
        <a href="#contact" className="btn btn-accent rounded-0 p-2">
          <i className="bi bi-telephone"></i> Contact Me
        </a>
      </div>
    </section>
  );
};
