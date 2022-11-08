import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <nav className="d-flex justify-content-evenly">
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Nav;
