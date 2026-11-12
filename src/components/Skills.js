
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
        padding: "90px 20px",
        background: darkMode ? "#111827" : "transparent",
        color: "#FFFFFF",
        transition: "all 0.4s ease",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
          color: "#FFFFFF",
        }}
      >
        💻 My Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {skillCategories.map((category, index) => (
          <div
            key={index}
            style={{
              background: darkMode
                ? "#1F2937"
                : "rgba(255,255,255,0.94)",
              color: darkMode ? "#F9FAFB" : "#172554",
              padding: "28px",
              borderRadius: "18px",
              border: darkMode
                ? "1px solid #374151"
                : "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 16px 30px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.15)";
            }}
          >
            <h2
              style={{
                color: darkMode ? "#60A5FA" : "#4F46E5",
                marginBottom: "18px",
                fontSize: "22px",
              }}
            >
              {category.title}
            </h2>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "2",
                margin: 0,
              }}
            >
              {category.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    color: darkMode ? "#E5E7EB" : "#374151",
                    fontSize: "16px",
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
