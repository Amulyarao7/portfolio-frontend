import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
	  <Hero />
      <About />
      <Skills />
	  <Education />

	  <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;