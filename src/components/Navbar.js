
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import { ThemeContext } from "../context/ThemeContext";
import Login from "./Login";

function Navbar({ user, onLogin, onLogout }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [showLogin, setShowLogin] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Education",
  ];

  const handleLogin = (loggedInUser) => {
    onLogin(loggedInUser);
    setShowLogin(false);
  };

  const handleLogout = () => {
    onLogout();
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className="navbar-logo"
            onClick={() => scrollToSection("Home")}
          >
            Amulya
          </div>

          <div className="navbar-links">
            {links.map((link) => (
              <button
                key={link}
                className="navbar-link"
                onClick={() => scrollToSection(link)}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="navbar-actions">
            <Switch
              onChange={toggleTheme}
              checked={darkMode}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
              handleDiameter={16}
            />

            {user ? (
              <button
                className="login-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {showLogin && (
        <div
          className="login-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-login"
              onClick={() => setShowLogin(false)}
              aria-label="Close login"
            >
              ×
            </button>

            <Login onLogin={handleLogin} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
```
