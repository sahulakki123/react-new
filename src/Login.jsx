import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(
      localStorage.getItem("nextrainUser")
    );

    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      alert("Login successful 🚆");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to NexTrain</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signup-btn">Login</button>
        </form>

        <p className="login-text" onClick={() => navigate("/")}>
          Create new account
        </p>
      </div>
    </div>
  );
};

export default Login;