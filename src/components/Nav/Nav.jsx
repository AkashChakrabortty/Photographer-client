import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";

const Nav = () => {
  const { logout, user, setUser } = useContext(userInfo);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Sign-out successful.");
        setUser("");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };
  return (
    <div className="p-2">
      <nav className="d-flex justify-content-evenly">
        <Link to="/" className="text-decoration-none fs-5">
          Home
        </Link>
        <Link to="/services" className="text-decoration-none fs-5">
          Service
        </Link>
        <Link to="/blogs" className="text-decoration-none fs-5">
          Blogs
        </Link>
        {user ? (
          <>
            <Link onClick={handleLogout} className="text-decoration-none fs-5">
              Logout
            </Link>
            <Link to="/reviews" className="text-decoration-none fs-5">
              My reviews
            </Link>
            <Link to="/addService" className="text-decoration-none fs-5">
              Add Service
            </Link>
          </>
        ) : (
          <Link to="/login" className="text-decoration-none fs-5">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Nav;
