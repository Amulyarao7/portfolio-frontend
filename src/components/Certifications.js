function Certifications() {
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
      organization: "NextGenCloud, VIT-AP & Purple Technologies",
      date: "Nov 2024",
    },
  ];

  return (
    <section
      id="certifications"
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
        Certifications
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {certifications.map((cert, index) => (
          <div
            key={index}
            style={{
              background: "#f8f9fa",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{cert.title}</h3>

            <p>
              <strong>Organization:</strong> {cert.organization}
            </p>

            <p>
              <strong>Completed:</strong> {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;