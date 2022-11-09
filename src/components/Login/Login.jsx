import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";
import img from "../Home/banner.jpg";

const Login = () => {
  const { googleSignIn } = useContext(userInfo);
  const handleGoogle = () => {
    console.log("done");
    googleSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="form-signin col-6 m-auto text-center mt-4">
      <form>
        <img className="mb-2" src={img} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log in
        </button>
      </form>
      <div className="google-create d-flex justify-content-between mt-2">
        <div className="google">
          <Link onClick={handleGoogle}>
            <FcGoogle className="fs-1"></FcGoogle>
          </Link>
        </div>
        <div className="create">
          <Link to="/register">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
