import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Showcase } from "./components/Showcase";
import { Contact } from "./components/Contact";
import "./App.css"


function App() {
  return (
    <div class="container-lg">
      <div class="row">
        <div class="col-sm-3">
          <Sidebar />
        </div>
        <div class="col-lg-9 col-sm-12 my-lg-5">
        <div class="icon-bar">
          <a href="#home"><i class="bi bi-house-door"></i></a> 
          <a href="#about"><i class="bi bi-person-vcard"></i></a> 
          <a href="#skills"><i class="bi bi-lightning"></i></a> 
          <a href="#experience"><i class="bi bi-stars"></i></a>
          <a href="#education"><i class="bi bi-mortarboard"></i></a> 
          <a href="#showcase"><i class="bi bi-display"></i></a> 
          <a href="#contact"><i class="bi bi-envelope"></i></a> 
        </div>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Showcase />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
