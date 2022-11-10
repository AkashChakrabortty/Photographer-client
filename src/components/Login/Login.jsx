import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import img from "../Home/banner.jpg";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  useTitle("Login");
  const { googleSignIn, login, loading, setLoading } = useContext(userInfo);
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const currentUser = {
          uid: user.uid,
        };

        // get jwt token
        fetch("https://server-omega-eosin.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // store jwt token in local storage
            localStorage.setItem("photographer", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="form-signin col-6 m-auto text-center mt-4">
          <form onSubmit={handleSubmit}>
            <img className="mb-2" src={img} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="password"
                name="password"
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
      )}
    </div>
  );
};

export default Login;
