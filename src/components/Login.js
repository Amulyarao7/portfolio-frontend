import React, { useState } from "react";
import axios from "axios";

const AUTH_URL = "http://localhost:5002";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

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
      onLogin(response.data.user);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div
      style={{
        color: "inherit",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        🔐 Login
      </h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      {message && (
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;
