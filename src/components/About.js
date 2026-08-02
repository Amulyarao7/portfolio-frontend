import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaCode,
  FaLaptopCode,
  FaJava,
} from "react-icons/fa";

// import profile from "../assets/profile.jpg";

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      style={{
        padding: "90px 20px",
        background: darkMode ? "#0F172A" : "#ffffff",
        color: darkMode ? "#F9FAFB" : "#111827",
        transition: "0.4s",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "60px",
        }}
      >
        👨‍💻 About Me
      </motion.h1>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Uncomment after adding your photo */}

          {/*
          <img
            src={profile}
            alt="Profile"
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #3B82F6",
              boxShadow: "0 15px 35px rgba(0,0,0,.25)",
            }}
          />
          */}

          {/* Placeholder */}

          <div
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: darkMode ? "#1F2937" : "#E5E7EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "120px",
              color: "#3B82F6",
              boxShadow: darkMode
                ? "0 12px 30px rgba(0,0,0,.45)"
                : "0 12px 30px rgba(0,0,0,.15)",
            }}
          >
            👩‍💻
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <h2
            style={{
              color: "#3B82F6",
              marginBottom: "20px",
            }}
          >
            Java Full Stack Developer
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: darkMode ? "#D1D5DB" : "#555",
            }}
          >
            I am currently pursuing an Integrated M.Tech in Computer
            Science & Engineering at VIT-AP University.

            <br /><br />

            I enjoy building scalable web applications using Java,
            Spring Boot, React, MySQL and REST APIs.

            <br /><br />

            My interests include Full Stack Development, Backend
            Engineering and solving programming problems using
            Data Structures & Algorithms.
          </p>

          {/* Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            <InfoCard
              icon={<FaUserGraduate />}
              title="Education"
              value="Integrated M.Tech CSE"
              darkMode={darkMode}
            />

            <InfoCard
              icon={<FaJava />}
              title="Primary Language"
              value="Java"
              darkMode={darkMode}
            />

            <InfoCard
              icon={<FaLaptopCode />}
              title="Specialization"
              value="Full Stack Development"
              darkMode={darkMode}
            />

            <InfoCard
              icon={<FaCode />}
              title="Current CGPA"
              value="8.52"
              darkMode={darkMode}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, darkMode }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      style={{
        background: darkMode ? "#1F2937" : "#F8FAFC",
        borderRadius: "18px",
        padding: "22px",
        textAlign: "center",
        boxShadow: darkMode
          ? "0 10px 25px rgba(0,0,0,.4)"
          : "0 10px 20px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          color: "#3B82F6",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>

      <h3>{title}</h3>

      <p
        style={{
          color: darkMode ? "#D1D5DB" : "#555",
        }}
      >
        {value}
      </p>
    </motion.div>
  );
}

export default About;