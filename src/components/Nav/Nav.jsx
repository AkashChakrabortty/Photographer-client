import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <nav className="d-flex justify-content-evenly">
        <Link to="/" className="text-decoration-none fs-2">
          Home
        </Link>
        <Link to="/service" className="text-decoration-none fs-2">
          Service
        </Link>
        <Link to="/blogs" className="text-decoration-none fs-2">
          Blogs
        </Link>
        <Link to="/login" className="text-decoration-none fs-2">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
