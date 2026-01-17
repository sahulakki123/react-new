import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    contact: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.cpassword ||
      !data.contact
    ) {
      setError("All fields required");
      return;
    }

    if (data.password !== data.cpassword) {
      setError("Passwords not matching");
      return;
    }

    localStorage.setItem("nextrainUser", JSON.stringify(data));

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Create Account</h2>
        <p className="subtitle">Register to continue</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <input
            name="contact"
            placeholder="Contact Number"
            onChange={handleChange}
          />

          <button className="signup-btn">Register</button>
        </form>

        <p className="login-text" onClick={() => navigate("/login")}>
          Already a user? Login
        </p>
      </div>
    </div>
  );
};

export default Signup;