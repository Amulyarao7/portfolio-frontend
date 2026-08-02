import React, { useEffect, useState, useContext } from "react";
import { getProjects } from "../services/projectService";
import { ThemeContext } from "../context/ThemeContext";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    getProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <section
      id="projects"
      data-aos="fade-up"
      style={{
        padding: "80px 20px",
        background: darkMode ? "#111827" : "#f8f9fa",
        color: darkMode ? "#ffffff" : "#111827",
        transition: "all 0.4s ease",
      }}
    >
      <h1
        data-aos="fade-down"
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "50px",
          color: darkMode ? "#ffffff" : "#111827",
        }}
      >
        My Projects
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            style={{
              width: "500px",
              background: darkMode ? "#1F2937" : "#ffffff",
              color: darkMode ? "#F9FAFB" : "#111827",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: darkMode
                ? "0 8px 20px rgba(0,0,0,0.5)"
                : "0 8px 20px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = darkMode
                ? "0 20px 35px rgba(0,0,0,0.7)"
                : "0 20px 35px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = darkMode
                ? "0 8px 20px rgba(0,0,0,0.5)"
                : "0 8px 20px rgba(0,0,0,0.15)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h2
                style={{
                  color: darkMode ? "#ffffff" : "#111827",
                  marginBottom: "15px",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: darkMode ? "#D1D5DB" : "#555555",
                  lineHeight: "1.8",
                }}
              >
                {project.description}
              </p>

              <h4
                style={{
                  color: darkMode ? "#60A5FA" : "#1565c0",
                  marginTop: "20px",
                }}
              >
                {project.technology}
              </h4>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "12px 25px",
                  background: darkMode ? "#2563EB" : "#1565c0",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1D4ED8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? "#2563EB"
                    : "#1565c0";
                }}
              >
                🚀 View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;