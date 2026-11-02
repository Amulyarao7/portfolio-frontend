import React, { useState } from "react";
import axios from "axios";

const AUTH_URL = "http://localhost:5002";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      onLogin(response.data.user);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🔐</div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to access my portfolio
        </p>

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p
            className={
              message.includes("successful")
                ? "login-success"
                : "login-error"
            }
          >
            {message}
          </p>
        )}

        <div className="login-footer">
          🔒 Secure portfolio access
        </div>
      </div>
    </div>
  );
}

export default Login;
