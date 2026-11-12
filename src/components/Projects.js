
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    title: "StreakGuard",
    icon: "🔥",
    number: "01",
    description:
      "A productivity and habit tracking application with streak management, authentication, and accountability features.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
  },
  {
    title: "Expense Tracker",
    icon: "💰",
    number: "02",
    description:
      "A full-stack expense tracking application for managing expenses with secure user authentication.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
  },
  {
    title: "Hostel Marketplace",
    icon: "🛍️",
    number: "03",
    description:
      "A marketplace application designed for students to buy, sell, and exchange hostel-related items.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

const techIcons = {
  React: "⚛️",
  "Node.js": "🟢",
  "Express.js": "🚀",
  MongoDB: "🍃",
  Mongoose: "🔗",
  JWT: "🔐",
  bcrypt: "🛡️",
};

function Projects() {
  const { darkMode } = useContext(ThemeContext);

  const theme = {
    section: darkMode ? "#0f172a" : "#f8fafc",
    card: darkMode ? "#1e293b" : "#ffffff",
    title: darkMode ? "#f8fafc" : "#111827",
    description: darkMode ? "#cbd5e1" : "#475569",
    border: darkMode ? "#334155" : "#e2e8f0",
    badge: darkMode ? "#334155" : "#eff6ff",
    badgeText: darkMode ? "#e2e8f0" : "#334155",
    muted: darkMode ? "#94a3b8" : "#64748b",
  };

  return (
    <section
      id="projects"
      style={{
        padding: "100px 8%",
        background: theme.section,
        color: theme.title,
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#6366f1",
              fontSize: "15px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            My Work
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 46px)",
              fontWeight: "800",
              margin: "0 0 15px",
              color: theme.title,
            }}
          >
            Featured Projects
          </h2>

          <p
            style={{
              color: theme.muted,
              fontSize: "16px",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A selection of applications I have worked on,
            using modern technologies and full-stack development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card"
              style={{
                background: theme.card,
                border: `1px solid ${theme.border}`,
                borderRadius: "20px",
                padding: "30px",
                boxShadow: darkMode
                  ? "0 12px 30px rgba(0,0,0,0.18)"
                  : "0 12px 30px rgba(15,23,42,0.07)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                minHeight: "350px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, #2563eb, #7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                  }}
                >
                  {project.icon}
                </div>

                <span
                  style={{
                    color: theme.muted,
                    fontSize: "14px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                  }}
                >
                  PROJECT {project.number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "23px",
                  fontWeight: "750",
                  margin: "0 0 15px",
                  color: theme.title,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: theme.description,
                  margin: "0 0 25px",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              <div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#818cf8",
                    marginBottom: "13px",
                  }}
                >
                  TECHNOLOGIES USED
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "9px",
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: theme.badge,
                        color: theme.badgeText,
                        border: `1px solid ${theme.border}`,
                        padding: "7px 11px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>{techIcons[tech] || "💻"}</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .project-card:hover {
          transform: translateY(-9px);
          border-color: #6366f1 !important;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.16) !important;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
