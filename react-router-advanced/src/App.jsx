// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute />}>
          <Route index element={<Profile />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
