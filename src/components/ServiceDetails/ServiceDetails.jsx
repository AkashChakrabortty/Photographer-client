import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { userInfo } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  useTitle("service details");
  const loaderData = useLoaderData();
  const { user } = useContext(userInfo);
  // console.log(user);
  const [reviews, setReviews] = useState();
  const [load, setLoad] = useState(false);
  console.log(load);
  useEffect(() => {
    fetch(`http://localhost:5000/review/`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(reviews);
        console.log(data);
      });
  }, [user, load]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.text.value;
    const milliseconds = new Date().getTime();
    // console.log(milliseconds)
    const userdb = {
      uid: user.uid,
      serviceName: loaderData.name,
      userName: user.displayName,
      serviceId: loaderData._id,
      img: user.photoURL,
      text: text,
      milliseconds: milliseconds,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userdb),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLoad(!load);
      });
    event.target.reset();
  };

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
        {reviews?.map((review) => {
          return (
            <div key={review._id}>
              <img
                src={review.img}
                alt={review.userName}
                style={{ height: "50px", borderRadius: "50%" }}
              />
              <h2>{review.userName}</h2>
              <p> {review.text} </p>
            </div>
          );
        })}
      </div>
      <div className="give-review">
        {user ? (
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control"
              placeholder="Leave a review here"
              id="floatingTextarea2"
              name="text"
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
