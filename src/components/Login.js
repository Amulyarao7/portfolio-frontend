
import React, { useState } from "react";
import axios from "axios";

const AUTH_URL = "http://localhost:5002";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        AUTH_URL + "/api/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      setMessage("Login successful");

      if (onLogin) {
        onLogin(response.data.user);
      }
    } catch (error) {
      setMessage(
        error.response && error.response.data
          ? error.response.data.message
          : "Unable to connect to authentication server"
      );
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "radial-gradient(circle at top left, #312e81 0%, #111827 40%, #020617 100%)",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: "relative",
      overflow: "hidden",
      padding: "20px",
      boxSizing: "border-box",
    },

    glowOne: {
      position: "absolute",
      width: "350px",
      height: "350px",
      borderRadius: "50%",
      background: "rgba(99, 102, 241, 0.22)",
      filter: "blur(80px)",
      top: "-120px",
      left: "-100px",
    },

    glowTwo: {
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "rgba(168, 85, 247, 0.18)",
      filter: "blur(80px)",
      bottom: "-100px",
      right: "-80px",
    },

    card: {
      width: "100%",
      maxWidth: "430px",
      padding: "42px",
      boxSizing: "border-box",
      background: "rgba(15, 23, 42, 0.72)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: "24px",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      boxShadow: "0 25px 80px rgba(0, 0, 0, 0.45)",
      position: "relative",
      zIndex: 2,
    },

    logo: {
      width: "64px",
      height: "64px",
      margin: "0 auto 22px",
      borderRadius: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      boxShadow: "0 12px 30px rgba(99, 102, 241, 0.35)",
      fontSize: "28px",
    },

    heading: {
      color: "#ffffff",
      textAlign: "center",
      margin: "0",
      fontSize: "30px",
      fontWeight: "700",
      letterSpacing: "-0.5px",
    },

    subtitle: {
      color: "#94a3b8",
      textAlign: "center",
      margin: "10px 0 32px",
      fontSize: "14px",
      lineHeight: "1.6",
    },

    label: {
      display: "block",
      color: "#cbd5e1",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "8px",
    },

    inputWrapper: {
      position: "relative",
      marginBottom: "20px",
    },

    icon: {
      position: "absolute",
      left: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "17px",
      color: "#64748b",
      pointerEvents: "none",
    },

    input: {
      width: "100%",
      height: "52px",
      boxSizing: "border-box",
      padding: "0 16px 0 46px",
      borderRadius: "12px",
      border: "1px solid rgba(148, 163, 184, 0.2)",
      background: "rgba(30, 41, 59, 0.75)",
      color: "#ffffff",
      fontSize: "14px",
      outline: "none",
    },

    passwordInput: {
      paddingRight: "48px",
    },

    eyeButton: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      border: "none",
      background: "transparent",
      color: "#94a3b8",
      cursor: "pointer",
      fontSize: "17px",
      padding: "6px",
    },

    button: {
      width: "100%",
      height: "52px",
      marginTop: "8px",
      border: "none",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "700",
      cursor: loading ? "not-allowed" : "pointer",
      opacity: loading ? 0.7 : 1,
      boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)",
    },

    success: {
      marginTop: "18px",
      padding: "12px",
      borderRadius: "10px",
      background: "rgba(34, 197, 94, 0.1)",
      border: "1px solid rgba(34, 197, 94, 0.25)",
      color: "#86efac",
      textAlign: "center",
      fontSize: "13px",
    },

    error: {
      marginTop: "18px",
      padding: "12px",
      borderRadius: "10px",
      background: "rgba(239, 68, 68, 0.1)",
      border: "1px solid rgba(239, 68, 68, 0.25)",
      color: "#fca5a5",
      textAlign: "center",
      fontSize: "13px",
    },

    footer: {
      marginTop: "28px",
      paddingTop: "20px",
      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      color: "#64748b",
      textAlign: "center",
      fontSize: "12px",
    },
  };

  const isSuccess =
    message.toLowerCase().includes("successful");

  return (
    <div style={styles.page}>
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>

      <div style={styles.card}>
        <div style={styles.logo}>🔐</div>

        <h1 style={styles.heading}>Welcome back</h1>

        <p style={styles.subtitle}>
          Sign in to continue to Amulya's portfolio
        </p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Username</label>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>👤</span>

            <input
              style={styles.input}
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <label style={styles.label}>Password</label>

          <div style={styles.inputWrapper}>
            <span style={styles.icon}>🔑</span>

            <input
              style={{
                ...styles.input,
                ...styles.passwordInput,
              }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              style={styles.eyeButton}
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {message && (
          <div style={isSuccess ? styles.success : styles.error}>
            {isSuccess ? "✓ " : "⚠ "}
            {message}
          </div>
        )}

        <div style={styles.footer}>
          🔒 Secure authentication
        </div>
      </div>
    </div>
  );
}

export default Login;
