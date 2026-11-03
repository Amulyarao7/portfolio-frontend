import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../context/ThemeContext";

function Navbar({ user, onLogout }) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
    "Education",
  ];

  const handleNavigation = (link) => {
    const id = link.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => handleNavigation("Home")}
        >
          Amulya
        </div>

        <div className="navbar-links">
          {links.map((link) => (
            <button
              key={link}
              className="navbar-link"
              onClick={() => handleNavigation(link)}
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

          {user && (
            <button
              className="login-button"
              onClick={onLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
