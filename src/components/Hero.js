function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg,#2563EB,#1E40AF)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "28px",
            marginBottom: "10px"
          }}
        >
          👋 Hello, I'm
        </h3>

        <h1
          style={{
            fontSize: "65px",
            marginBottom: "15px"
          }}
        >
          SAGI AMULYA
        </h1>

        <h2
          style={{
            color: "#FFD166",
            marginBottom: "25px"
          }}
        >
          Java Full Stack Developer
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "650px",
            margin: "auto",
            lineHeight: "1.7"
          }}
        >
          Passionate about building responsive web applications using
          Java, Spring Boot, React, MySQL and REST APIs.
        </p>

        <div
          style={{
            marginTop: "40px"
          }}
        >
          <a
            href="#projects"
            style={{
              background: "#FFD166",
              color: "#000",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "15px"
            }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "15px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Contact Me
          </a>
		  <a
		    href="/resume.pdf"
		    download
		    style={{
		      background: "#FFD166",
		      color: "#000",
		      padding: "15px 30px",
		      borderRadius: "8px",
		      textDecoration: "none",
		      fontWeight: "bold",
		    }}
		  >
		    📄 Download Resume
		  </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;