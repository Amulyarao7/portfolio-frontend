
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaRocket,
  FaEnvelope,
  FaFilePdf,
  FaHandPaper,
} from "react-icons/fa";

function Hero() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`hero-section ${darkMode ? "dark" : "light"}`}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
        <FaHandPaper />
Hello, welcome to my portfolio!
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          SAGI AMULYA
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "React Developer",
            2000,
            "Backend Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="hero-role"
        />

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Passionate about building scalable and responsive web applications
          using <strong>Java, Spring Boot, React, MySQL</strong> and REST APIs.
          I enjoy solving real-world problems through clean and efficient code.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="hero-button primary"
          >
            <FaRocket />
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="hero-button secondary"
          >
            <FaEnvelope />
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="/resume.pdf"
            download
            className="hero-button secondary"
          >
            <FaFilePdf />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="hero-socials">
          <motion.a
            whileHover={{ scale: 1.15, y: -5 }}
            href="https://github.com/Amulyarao7"
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, y: -5 }}
            href="https://www.linkedin.com/in/amulya-sagi-9392a42b6/"
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="hero-scroll"
          aria-label="Scroll to About"
        >
          <FaArrowDown />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
