function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "80px 20px",
        background: "#f8f9fa",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
          color: "#1f2937",
        }}
      >
        Education
      </h1>

      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        {/* VIT-AP */}
        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#2563EB" }}>
            VIT-AP University
          </h2>

          <h3>Integrated M.Tech in Computer Science & Engineering</h3>

          <p><strong>Duration:</strong> 2023 – 2028</p>

          <p><strong>Current Year:</strong> 4th Year</p>

          <p><strong>Current CGPA:</strong> 8.52</p>

          <p>
            Pursuing an Integrated M.Tech in Computer Science & Engineering,
            focusing on Java, Data Structures & Algorithms, Database
            Management Systems, Operating Systems, Computer Networks,
            Full Stack Development, and Software Engineering.
          </p>
        </div>

        {/* Intermediate */}
        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#2563EB" }}>
            Narayana Junior College
          </h2>

          <h3>Senior Secondary (Class XII)</h3>

          <p><strong>Duration:</strong> 2021 – 2023</p>

          <p><strong>Percentage:</strong> 97.7%</p>

          <p>
            Completed higher secondary education with a focus on
            Mathematics, Physics, and Chemistry, achieving an
            excellent academic record while strengthening analytical
            thinking and problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;