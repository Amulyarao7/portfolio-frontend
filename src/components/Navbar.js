
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../context/ThemeContext";

import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaGraduationCap,
  FaSun,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar({ user, onLogout }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const links = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Skills", icon: <FaCode /> },
    { name: "Projects", icon: <FaFolderOpen /> },
    { name: "Contact", icon: <FaEnvelope /> },
    { name: "Education", icon: <FaGraduationCap /> },
  ];

  const handleNavigation = (link) => {
    const id = link.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => handleNavigation("Home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleNavigation("Home");
          }}
        >
          Amulya.
        </div>

        <div className="navbar-links">
          {links.map((link) => (
            <button
              key={link.name}
              className="navbar-link"
              onClick={() => handleNavigation(link.name)}
              title={link.name}
            >
              {link.icon}
              <span>{link.name}</span>
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          <div
            className="theme-control"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FaMoon className="theme-icon" />
            ) : (
              <FaSun className="theme-icon" />
            )}

            <Switch
              onChange={toggleTheme}
              checked={darkMode}
              uncheckedIcon={false}
              checkedIcon={false}
              height={22}
              width={44}
              handleDiameter={18}
              offColor="#CBD5E1"
              onColor="#6366F1"
              aria-label="Toggle dark mode"
            />
          </div>

          {user && (
            <button
              className="logout-button"
              onClick={onLogout}
              title="Logout"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
