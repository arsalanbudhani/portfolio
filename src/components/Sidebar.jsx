import { images } from "../constants/assets";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={images.profile} alt="Muhammad Arsalan Budhani" />
      <nav className="sidebar-nav">
        <a href="#home">Home <i className="bi bi-house-door"></i></a>
        <a href="#about">About <i className="bi bi-person-vcard"></i></a>
        <a href="#skills">Skills <i className="bi bi-lightning"></i></a>
        <a href="#experience">Experience <i className="bi bi-stars"></i></a>
        <a href="#education">Education <i className="bi bi-mortarboard"></i></a>
        <a href="#contact">Contact <i className="bi bi-envelope"></i></a>
      </nav>
    </div>
  );
};
