
import React, { useEffect, useState } from "react";

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

function App() {
  const { darkMode } = React.useContext(ThemeContext);

  const [user, setUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Session check failed:", error);
        setUser(null);
      } finally {
        setCheckingSession(false);
      }
    };

    checkSession();
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout request failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
    }
  };

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

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

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
