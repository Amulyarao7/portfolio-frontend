import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Skills() {
  const { darkMode } = useContext(ThemeContext);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React"],
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "PHP", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Core Computer Science",
      skills: [
        "Data Structures & Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse",
        "MySQL Workbench",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        background: darkMode ? "#111827" : "#ffffff",
        color: darkMode ? "#F9FAFB" : "#111827",
        transition: "all 0.4s ease",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
          color: darkMode ? "#ffffff" : "#111827",
        }}
      >
        Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            style={{
              background: darkMode ? "#1F2937" : "#f8f9fa",
              color: darkMode ? "#F9FAFB" : "#111827",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: darkMode
                ? "0 8px 20px rgba(0,0,0,0.5)"
                : "0 5px 15px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h2
              style={{
                color: darkMode ? "#60A5FA" : "#2563EB",
                marginBottom: "15px",
              }}
            >
              {category.title}
            </h2>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "1.8",
              }}
            >
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    color: darkMode ? "#E5E7EB" : "#374151",
                    fontSize: "17px",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;