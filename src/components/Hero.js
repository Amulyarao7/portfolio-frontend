import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        transition: "0.5s",

        background: darkMode
          ? "linear-gradient(135deg,#020617,#0F172A,#1E293B)"
          : "linear-gradient(135deg,#2563EB,#4F46E5,#9333EA)",

        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: "850px",
        }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "30px",
            marginBottom: "15px",
          }}
        >
          👋 Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "72px",
            fontWeight: "800",
            letterSpacing: "2px",
            marginBottom: "20px",
            textShadow: "0 0 20px rgba(255,255,255,.25)",
          }}
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
          style={{
            color: "#FFD166",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "750px",
            margin: "auto",
            opacity: 0.95,
          }}
        >
          Passionate about building scalable and responsive web applications
          using <strong>Java, Spring Boot, React, MySQL</strong> and REST APIs.
          I enjoy solving real-world problems through clean and efficient code.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "18px",
            marginTop: "45px",
          }}
        >
          <motion.a
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            style={primaryButton}
          >
            🚀 View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            style={secondaryButton}
          >
            📧 Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            style={primaryButton}
          >
            📄 Download Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "45px",
            fontSize: "34px",
          }}
        >
          <motion.a
            whileHover={{
              scale: 1.25,
              rotate: 10,
            }}
            href="https://github.com/Amulyarao7"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.25,
              rotate: -10,
            }}
            href="https://www.linkedin.com/in/amulya-sagi-9392a42b6/"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Scroll Down */}

        <motion.a
          href="#about"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          style={{
            display: "inline-block",
            marginTop: "60px",
            color: "#FFD166",
            fontSize: "34px",
          }}
        >
          <FaArrowDown />
        </motion.a>
      </motion.div>
    </section>
  );
}

const primaryButton = {
  padding: "15px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "700",
  background: "linear-gradient(90deg,#2563EB,#4F46E5)",
  boxShadow: "0 10px 25px rgba(37,99,235,.35)",
};

const secondaryButton = {
  padding: "15px 30px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "700",
  border: "2px solid rgba(255,255,255,.6)",
  background: "rgba(255,255,255,.08)",
  backdropFilter: "blur(10px)",
};

const iconStyle = {
  color: "#fff",
  transition: "0.3s",
};

export default Hero;