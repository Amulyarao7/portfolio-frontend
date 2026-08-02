import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? "#F9FAFB" : "#111827";
  const secondaryColor = darkMode ? "#D1D5DB" : "#555";

  return (
    <section
      id="contact"
      style={{
        padding: "90px 20px",
        background: darkMode ? "#111827" : "#f8f9fa",
        transition: "0.4s",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "55px",
          color: textColor,
        }}
      >
        📬 Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
        }}
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: darkMode ? "#1F2937" : "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: darkMode
            ? "0 12px 35px rgba(0,0,0,.45)"
            : "0 10px 25px rgba(0,0,0,.10)",
          transition: "0.4s",
        }}
      >
        <ContactItem
          icon={<FaUser color="#2563EB" />}
          title="Name"
          value="SAGI AMULYA"
          color={textColor}
        />

        <ContactItem
          icon={<FaEnvelope color="#EF4444" />}
          title="Email"
          value="sagiamulyarao99@gmail.com"
          href="mailto:sagiamulyarao99@gmail.com"
          color={secondaryColor}
        />

        <ContactItem
          icon={<FaPhone color="#22C55E" />}
          title="Phone"
          value="+91 9652733033"
          href="tel:+919652733033"
          color={secondaryColor}
        />

        <ContactItem
          icon={<FaLinkedin color="#0A66C2" />}
          title="LinkedIn"
          value="linkedin.com/in/amulya-sagi-9392a42b6"
          href="https://www.linkedin.com/in/amulya-sagi-9392a42b6/"
          color="#0A66C2"
        />

        <ContactItem
          icon={<FaGithub color={darkMode ? "#ffffff" : "#111827"} />}
          title="GitHub"
          value="github.com/Amulyarao7"
          href="https://github.com/Amulyarao7"
          color={darkMode ? "#ffffff" : "#111827"}
        />
      </motion.div>
    </section>
  );
}

function ContactItem({ icon, title, value, href, color }) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2 }}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "25px",
        fontSize: "19px",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          marginRight: "18px",
        }}
      >
        {icon}
      </div>

      <div>
        <strong>{title}: </strong>

        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            style={{
              color,
              textDecoration: "none",
            }}
          >
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </motion.div>
  );
}

export default Contact;