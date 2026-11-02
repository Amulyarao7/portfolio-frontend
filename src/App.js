import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Login from "./components/Login";

import { ThemeContext } from "./context/ThemeContext";

const AUTH_URL = "http://localhost:5002";

function App() {
  const { darkMode } = React.useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  // Check whether the user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get(`${AUTH_URL}/api/me`, {
          withCredentials: true,
        });

        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setCheckingSession(false);
      }
    };

    checkSession();
  }, []);

  // Login successful
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await axios.post(
        `${AUTH_URL}/api/logout`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Logout error:", error);
    }

    setUser(null);
  };

  // While checking existing session
  if (checkingSession) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        Checking authentication...
      </div>
    );
  }

  // User is NOT logged in
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // User IS logged in → show portfolio
  return (
    <div
      style={{
        background: darkMode ? "#111827" : "#ffffff",
        color: darkMode ? "#ffffff" : "#222222",
        minHeight: "100vh",
        transition: "0.4s",
      }}
    >
      <Navbar
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
