// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Log the user out
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet for nested routes */}
      <Outlet />

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;