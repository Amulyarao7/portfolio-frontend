import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

function Certifications() {
  const { darkMode } = useContext(ThemeContext);

  const certifications = [
    {
      title: "Machine Learning Internship",
      organization: "Prodigy InfoTech",
      date: "Feb – Mar 2025",
    },
    {
      title: "MongoDB Python Developer Path",
      organization: "MongoDB University",
      date: "Jun 2025",
    },
    {
      title: "Cloud Computing Foundations",
      organization: "Google Cloud Skills Boost",
      date: "Jul 2025",
    },
    {
      title: "Technology Job Simulation",
      organization: "Deloitte (Forage)",
      date: "Jun 2025",
    },
    {
      title: "TechNov'24 Hackathon Participant",
      organization:
        "NextGenCloud, VIT-AP & Purple Technologies",
      date: "Nov 2024",
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: "90px 20px",
        background: darkMode ? "#111827" : "#ffffff",
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
        🏆 Certifications
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            style={{
              background: darkMode ? "#1F2937" : "#f8f9fa",
              color: darkMode ? "#F9FAFB" : "#111827",
              padding: "28px",
              borderRadius: "18px",
              boxShadow: darkMode
                ? "0 12px 30px rgba(0,0,0,.45)"
                : "0 10px 25px rgba(0,0,0,.10)",
              transition: "0.3s",
            }}
          >
            <h2
              style={{
                color: "#3B82F6",
                marginBottom: "15px",
                fontSize: "24px",
              }}
            >
              🎖️ {cert.title}
            </h2>

            <p
              style={{
                color: darkMode ? "#D1D5DB" : "#555",
                lineHeight: "1.8",
                marginBottom: "12px",
              }}
            >
              <strong>Organization:</strong> {cert.organization}
            </p>

            <p
              style={{
                color: darkMode ? "#D1D5DB" : "#555",
                lineHeight: "1.8",
              }}
            >
              <strong>Completed:</strong> {cert.date}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;