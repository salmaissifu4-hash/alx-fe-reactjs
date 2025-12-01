// src/hooks/useAuth.js
import { useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;