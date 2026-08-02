import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {

  const { darkMode } = useContext(ThemeContext);

  return (

    <div
      style={{
        background: darkMode ? "#111827" : "#ffffff",
        color: darkMode ? "white" : "#222",
        transition: "0.4s"
      }}
    >

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