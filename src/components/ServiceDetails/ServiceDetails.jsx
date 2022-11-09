import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";
import img from "../Home/banner.jpg";

const ServiceDetails = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  const { user } = useContext(userInfo);
  return (
    <div className="container">
      <div className="service">
        <div className="img col-5">
          <img
            src={loaderData.img}
            alt={loaderData.name}
            className="img-fluid"
          />
        </div>
        <div className="info">
          <h2>{loaderData.name}</h2>
          <h3> {loaderData.price} </h3>
          <p> {loaderData.description} </p>
        </div>
      </div>
      <div className="review">
        <img src={img} alt="" style={{ height: "50px", borderRadius: "50%" }} />
        <h2>Name</h2>
        <p>review</p>
      </div>
      <div className="give-review">
        {user ? (
          <form>
            <textarea
              class="form-control"
              placeholder="Leave a review here"
              id="floatingTextarea2"
            ></textarea>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">
              Please login to add a review
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
