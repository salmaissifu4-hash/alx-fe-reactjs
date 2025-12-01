// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
          <li>
            <Link to="/blog/123">Go to Blog Post 123</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;