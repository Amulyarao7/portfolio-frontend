import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

function Login({ onLogin, authUrl }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${authUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      onLogin(data.user);
    } catch (err) {
      setError(err.message || "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setError("");

    try {
      const response = await fetch(`${authUrl}/api/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          credential: credentialResponse.credential,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Google login failed");
      }

      onLogin(data.user);
    } catch (err) {
      setError(err.message || "Google login failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#222",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              color: "#777",
              marginTop: "10px",
            }}
          >
            Login to view Amulya's portfolio
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#333",
            }}
          >
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
            style={{
              width: "100%",
              padding: "13px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#333",
            }}
          >
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            style={{
              width: "100%",
              padding: "13px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          />

          {error && (
            <p
              style={{
                color: "#d32f2f",
                background: "#ffebee",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "10px",
              border: "none",
              borderRadius: "10px",
              background: "#667eea",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "25px 0",
            color: "#999",
            fontSize: "13px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#ddd",
            }}
          />

          OR

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#ddd",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError("Google login failed")}
          />
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#999",
            fontSize: "13px",
          }}
        >
          Secure session-based authentication
        </p>
      </div>
    </div>
  );
}

export default Login;
