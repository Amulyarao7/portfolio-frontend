
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
        }}
      >
        <h2
          style={{
            color: darkMode ? "#60A5FA" : "#2563EB",
            fontWeight: "800",
            letterSpacing: "2px",
            fontSize: "30px",
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
              href={"#" + item.toLowerCase()}
              style={linkStyle(darkMode)}
            >
              {item}
            </a>
          ))}

          {!user ? (
            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
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
                background: "#DC2626",
                color: "#FFFFFF",
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
            }}
          >
            <span>☀️</span>

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

            <span>🌙</span>
          </div>
        </div>
      </nav>

      {showLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            <button
              onClick={() => setShowLogin(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 10,
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                border: "none",
                background: darkMode ? "#334155" : "#E5E7EB",
                color: darkMode ? "#FFFFFF" : "#111827",
                fontSize: "24px",
                cursor: "pointer",
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
  color: darkMode ? "#FFFFFF" : "#111827",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "17px",
});

export default Navbar;
```
