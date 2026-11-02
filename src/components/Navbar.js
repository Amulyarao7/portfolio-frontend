
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
    if (onLogin) {
      onLogin(loggedInUser);
    }

    setShowLogin(false);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 60px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: darkMode
            ? "rgba(15,23,42,0.92)"
            : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: darkMode
            ? "0 5px 25px rgba(0,0,0,0.35)"
            : "0 5px 20px rgba(0,0,0,0.08)",
          transition: "all 0.4s ease",
        }}
      >
        <h2
          style={{
            color: darkMode ? "#60A5FA" : "#2563EB",
            fontWeight: "800",
            letterSpacing: "2px",
            fontSize: "30px",
            cursor: "pointer",
            margin: 0,
          }}
        >
          SAGI AMULYA
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={linkStyle(darkMode)}
              onMouseEnter={(e) => {
                e.target.style.color = "#2563EB";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = darkMode ? "#ffffff" : "#111827";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {item}
            </a>
          ))}

          {!user ? (
            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: "#2563EB",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              🔐 Login
            </button>
          ) : (
            <button
              onClick={onLogout}
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "10px",
            }}
          >
            <span style={{ fontSize: "18px" }}>☀️</span>

            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              checkedIcon={false}
              uncheckedIcon={false}
              offColor="#CBD5E1"
              onColor="#2563EB"
              handleDiameter={22}
              height={24}
              width={50}
            />

            <span style={{ fontSize: "18px" }}>🌙</span>
          </div>
        </div>
      </nav>

      {showLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: darkMode ? "#0f172a" : "#ffffff",
              padding: "30px",
              borderRadius: "15px",
              width: "400px",
              maxWidth: "90%",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                border: "none",
                background: "transparent",
                fontSize: "24px",
                cursor: "pointer",
                color: darkMode ? "white" : "black",
              }}
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

const linkStyle = (darkMode) => ({
  color: darkMode ? "#ffffff" : "#111827",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "17px",
  transition: "all 0.3s ease",
  position: "relative",
});

export default Navbar;
```
