import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

function Education() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="education"
      style={{
        padding: "90px 20px",
        background: darkMode ? "#111827" : "#f8f9fa",
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
          color: darkMode ? "#ffffff" : "#111827",
        }}
      >
        🎓 Education
      </motion.h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* VIT */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: darkMode ? "#1F2937" : "#ffffff",
            color: darkMode ? "#F9FAFB" : "#111827",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: darkMode
              ? "0 12px 30px rgba(0,0,0,.45)"
              : "0 10px 25px rgba(0,0,0,.10)",
          }}
        >
          <h2
            style={{
              color: "#3B82F6",
              marginBottom: "12px",
            }}
          >
            🏫 VIT-AP University
          </h2>

          <h3 style={{ marginBottom: "15px" }}>
            Integrated M.Tech in Computer Science & Engineering
          </h3>

          <p><strong>📅 Duration:</strong> 2023 – 2028</p>

          <p><strong>🎯 Current Year:</strong> 4th Year</p>

          <p><strong>📈 Current CGPA:</strong> 8.52</p>

          <p
            style={{
              marginTop: "18px",
              lineHeight: "1.8",
              color: darkMode ? "#D1D5DB" : "#555",
            }}
          >
            Pursuing Integrated M.Tech in Computer Science & Engineering
            with a strong focus on Java, Spring Boot, React, Data
            Structures & Algorithms, DBMS, Operating Systems,
            Computer Networks and Full Stack Development.
          </p>
        </motion.div>

        {/* Intermediate */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: darkMode ? "#1F2937" : "#ffffff",
            color: darkMode ? "#F9FAFB" : "#111827",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: darkMode
              ? "0 12px 30px rgba(0,0,0,.45)"
              : "0 10px 25px rgba(0,0,0,.10)",
          }}
        >
          <h2
            style={{
              color: "#3B82F6",
              marginBottom: "12px",
            }}
          >
            🏫 Narayana Junior College
          </h2>

          <h3 style={{ marginBottom: "15px" }}>
            Senior Secondary (Class XII)
          </h3>

          <p><strong>📅 Duration:</strong> 2021 – 2023</p>

          <p><strong>🏅 Percentage:</strong> 97.7%</p>

          <p
            style={{
              marginTop: "18px",
              lineHeight: "1.8",
              color: darkMode ? "#D1D5DB" : "#555",
            }}
          >
            Completed higher secondary education with a strong
            foundation in Mathematics, Physics and Chemistry,
            achieving excellent academic performance while developing
            analytical thinking and problem-solving skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;