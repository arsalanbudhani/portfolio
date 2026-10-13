import { Sidebar } from "./components/Sidebar";
import { IconBar } from "./components/IconBar";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";
import "./styles/App.css";

function App() {
  return (
    <div className="container-lg">
      <div className="row">
        <aside className="col-lg-3 d-none d-lg-block px-0">
          <Sidebar />
        </aside>
        <main className="col-12 col-lg-9 py-3 py-lg-5">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
      <IconBar />
    </div>
  );
}

export default App;
