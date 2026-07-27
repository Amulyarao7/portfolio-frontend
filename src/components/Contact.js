import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "70px 20px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Contact Me
      </h1>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
          textAlign: "left",
        }}
      >
        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          <FaUser
            style={{
              color: "#007BFF",
              marginRight: "10px",
            }}
          />
          <strong>Name:</strong> SAGI AMULYA
        </p>

        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          <FaEnvelope
            style={{
              color: "#E63946",
              marginRight: "10px",
            }}
          />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:sagiamulyarao99@gmail.com"
            style={{
              textDecoration: "none",
              color: "#333",
            }}
          >
            sagiamulyarao99@gmail.com
          </a>
        </p>

        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          <FaPhone
            style={{
              color: "#28A745",
              marginRight: "10px",
            }}
          />
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+919652733033"
            style={{
              textDecoration: "none",
              color: "#333",
            }}
          >
            +91 9652733033
          </a>
        </p>

        <p style={{ fontSize: "20px", marginBottom: "20px" }}>
          <FaLinkedin
            style={{
              color: "#0077B5",
              marginRight: "10px",
            }}
          />
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/amulya-sagi-9392a42b6/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#0077B5",
            }}
          >
            linkedin.com/in/amulya-sagi-9392a42b6
          </a>
        </p>

        <p style={{ fontSize: "20px" }}>
          <FaGithub
            style={{
              color: "#000",
              marginRight: "10px",
            }}
          />
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Amulyarao7"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#333",
            }}
          >
            github.com/Amulyarao7
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;