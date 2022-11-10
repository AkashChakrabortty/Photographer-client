import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { userInfo } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("My reviews");
  // const [edit, setEdit] = useState(false);
  const { user } = useContext(userInfo);
  const [reviews, setReviews] = useState([]);
  const [delet, setDelete] = useState(false);
  const notify = () => toast("Delete success");
  useEffect(() => {
    fetch(`http://localhost:5000/review/${user?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("photographer")}`,
      },
    })
      // sODQYIgOH7MhVcKvQnjZV9aOo9x2
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(reviews);
        setDelete(!delet);
        // console.log(data);
      });
  }, [user, delet]);

  const handleDelete = (serviceId) => {
    // event.preventDefault();
    console.log(serviceId);
    const userdb = {
      uid: user.uid,
      serviceId: serviceId,
    };
    fetch(`http://localhost:5000/review/delete?id=${serviceId}`, {
      method: "DELETE",
      // headers: {
      //   "content-type": "application/json",
      // },
      // body: JSON.stringify(userdb),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    notify();
  };
  // const handleEdit = () => {
  //   setEdit(true);
  // };
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
                    {/* <button className="btn btn-primary" onClick={handleEdit}>
                      Edit Review
                    </button> */}
                    {/* {edit ? (
                      <Navigate to={"/reviewEdit"}>
                        <EditReview key={review._id} data={"h"}></EditReview>
                      </Navigate>
                    ) : undefined} */}
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
