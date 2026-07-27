function Skills() {
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
        background: "#ffffff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
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
              background: "#f8f9fa",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ color: "#2563EB" }}>{category.title}</h2>

            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;