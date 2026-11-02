
import React, { useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

const AUTH_URL = "http://localhost:5002";

function Login({ onLogin }) {
  const { darkMode } = useContext(ThemeContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${AUTH_URL}/api/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setMessage("Login successful!");

      if (onLogin) {
        onLogin(response.data.user);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "38px 35px",
          borderRadius: "24px",
          background: darkMode
            ? "rgba(15, 23, 42, 0.95)"
            : "rgba(255, 255, 255, 0.97)",
          boxShadow: darkMode
            ? "0 25px 60px rgba(0,0,0,0.45)"
            : "0 25px 60px rgba(37,99,235,0.15)",
          border: darkMode
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(37,99,235,0.12)",
          boxSizing: "border-box",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(135deg, #2563EB, #7C3AED)",
            boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
            fontSize: "32px",
          }}
        >
          🔐
        </div>

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            margin: "0 0 8px",
            fontSize: "30px",
            fontWeight: "800",
            color: darkMode ? "#ffffff" : "#111827",
          }}
        >
          Welcome Back
        </h2>

        <p
          style={{
            textAlign: "center",
            margin: "0 0 30px",
            color: darkMode ? "#94A3B8" : "#64748B",
            fontSize: "15px",
          }}
        >
          Login to continue to Amulya's Portfolio
        </p>

        <form onSubmit={handleLogin}>
          {/* Username */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "600",
                color: darkMode ? "#E2E8F0" : "#374151",
              }}
            >
              Username
            </label>

            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "18px",
                }}
              >
                👤
              </span>

              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 15px 14px 45px",
                  borderRadius: "12px",
                  border: darkMode
                    ? "1px solid #334155"
                    : "1px solid #D1D5DB",
                  background: darkMode ? "#1E293B" : "#F8FAFC",
                  color: darkMode ? "#ffffff" : "#111827",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#2563EB";
                  e.target.style.boxShadow =
                    "0 0 0 3px rgba(37,99,235,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = darkMode
                    ? "#334155"
                    : "#D1D5DB";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "600",
                color: darkMode ? "#E2E8F0" : "#374151",
              }}
            >
              Password
            </label>

            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "18px",
                }}
              >
                🔑
              </span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "14px 48px 14px 45px",
                  borderRadius: "12px",
                  border: darkMode
                    ? "1px solid #334155"
                    : "1px solid #D1D5DB",
                  background: darkMode ? "#1E293B" : "#F8FAFC",
                  color: darkMode ? "#ffffff" : "#111827",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#2563EB";
                  e.target.style.boxShadow =
                    "0 0 0 3px rgba(37,99,235,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = darkMode
                    ? "#334155"
                    : "#D1D5DB";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "17px",
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background: loading
                ? "#94A3B8"
                : "linear-gradient(135deg, #2563EB, #7C3AED)",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading
                ? "none"
                : "0 10px 25px rgba(37,99,235,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 14px 30px rgba(37,99,235,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = loading
                ? "none"
                : "0 10px 25px rgba(37,99,235,0.3)";
            }}
          >
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "600",
              background: message.includes("successful")
                ? "rgba(34,197,94,0.12)"
                : "rgba(239,68,68,0.12)",
              color: message.includes("successful")
                ? "#16A34A"
                : "#DC2626",
            }}
          >
            {message}
          </div>
        )}

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            marginBottom: 0,
            fontSize: "13px",
            color: darkMode ? "#64748B" : "#94A3B8",
          }}
        >
          🔒 Secure authentication
        </p>
      </div>
    </div>
  );
}

export default Login;
```
