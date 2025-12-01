// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Set the user as authenticated
    navigate("/profile"); // Redirect to the profile page
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;