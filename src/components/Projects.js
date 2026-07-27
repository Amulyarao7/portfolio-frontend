import React, { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

function Projects() {
  const [projects, setProjects] = useState([]);

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
      style={{
        padding: "70px 20px",
        background: "#f8f9fa",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "50px",
        }}
      >
        My Projects
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              width: "380px",
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <p>
                <strong>Technology:</strong>
                <br />
                {project.technology}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  background: "#2563EB",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;