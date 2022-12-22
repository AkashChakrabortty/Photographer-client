import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { userInfo } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("My reviews");
  const { user } = useContext(userInfo);
  const [reviews, setReviews] = useState([]);
  const [delet, setDelete] = useState(false);
  const notify = () => toast("Delete success");
  useEffect(() => {
    fetch(`https://photographer-server-nine.vercel.app/review/${user?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photographer")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setDelete(!delet);
      });
  }, [user, delet]);

  const handleDelete = (serviceId) => {
    console.log(serviceId);
    const userdb = {
      uid: user.uid,
      serviceId: serviceId,
    };
    fetch(
      `https://photographer-server-nine.vercel.app/review/delete?id=${serviceId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {});
    notify();
  };

  return (
    <div className="container">
      {reviews.length === 0 ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="fs-1">No reviews were added</div>
        </div>
      ) : (
        <div className="row row-cols-sm-3 row-cols-2">
          {reviews?.map((review) => {
            return (
              <div className="col mx-auto text-center" key={review._id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{review.serviceName}</h5>
                    <p className="card-text">{review.text}</p>
                    <div className="dlt mb-2">
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-primary"
                      >
                        Delete Review
                      </button>
                      <ToastContainer />
                    </div>

                    <Link to={`/reviews/:${review._id}`}>
                      <button className="btn btn-primary">Edit Review</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
