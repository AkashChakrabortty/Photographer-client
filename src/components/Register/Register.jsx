import React, { useContext } from "react";
import { userInfo } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import img from "../Home/banner.jpg";

const Register = () => {
  useTitle("Register");
  const { createUser, updateUser, loading, setLoading } = useContext(userInfo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;

    createUser(email, password)
      .then((userCredential) => {
        updateUser(name, photoUrl);
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
        <div className="text-center mt-4">
          <form className="col-6 mx-auto" onSubmit={handleSubmit}>
            <img className="mb-2" src={img} alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

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
                type="text"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label htmlFor="floatingInput">Name:</label>
            </div>
            <div className="form-floating">
              <input
                type="url"
                name="photoUrl"
                className="form-control"
                id="floatingInput"
                placeholder="Enter photo url"
              />
              <label htmlFor="floatingInput">Enter photo url:</label>
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
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
