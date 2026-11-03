import React from "react";

const projects = [
  {
    title: "StreakGuard",
    description:
      "A productivity and habit tracking application with streak management, authentication, and accountability features.",
    technologies:
      "Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracking application for managing expenses with secure user authentication.",
    technologies:
      "React, Node.js, Express.js, MongoDB, Mongoose, JWT",
  },
  {
    title: "Hostel Marketplace",
    description:
      "A marketplace application designed for students to buy, sell, and exchange hostel-related items.",
    technologies:
      "React, Node.js, Express.js, MongoDB",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "90px 8%",
        backgroundColor: "#f8fafc",
        color: "#111827",
        minHeight: "600px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "50px",
          color: "#111827",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.10)",
              border: "1px solid #e5e7eb",
              minHeight: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "26px",
                  marginBottom: "15px",
                  color: "#111827",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4b5563",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "#374151",
                }}
              >
                <strong>Technologies:</strong>{" "}
                {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
