import React from "react";
import img from "../Home/banner.jpg";

const Register = () => {
  return (
    <div className="text-center mt-4">
      <form className="col-6 mx-auto">
        <img className="mb-2" src={img} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label for="floatingInput">Name:</label>
        </div>
        <div className="form-floating">
          <input
            type="url"
            className="form-control"
            id="floatingInput"
            placeholder="Enter photo url"
          />
          <label for="floatingInput">Enter photo url:</label>
        </div>
        <div className="form-floating my-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
