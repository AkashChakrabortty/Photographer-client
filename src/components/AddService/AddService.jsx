import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userInfo } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add service");
  const loaderData = useLoaderData();
  const notify = () =>
    toast("Service add successfully.Please visit home to see your add");
  const { user } = useContext(userInfo);

  const handleAdd = (item) => {
    const userdb = {
      uid: user.uid,
      name: item.name,
      serviceId: item._id,
      img: item.img,
      price: item.price,
      description: item.description,
    };
    fetch("https://server-omega-eosin.vercel.app/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userdb),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    notify();
  };
  return (
    <div className="container">
      <div className="items">
        <div className="row row-cols-sm-3 row-cols-2 mt-3 mb-3">
          {loaderData.map((item) => {
            return (
              <div className="col text-center" key={item._id}>
                <div className="card">
                  <PhotoProvider>
                    <PhotoView src={item.img}>
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt="img"
                        style={{ height: "200px", cursor: "pointer" }}
                      />
                    </PhotoView>
                  </PhotoProvider>

                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title">{item.price}</h5>
                    <p className="card-text">
                      {item.description.slice(0, 100)}
                      {item.description.slice(0, 100) ? "..." : ""}
                    </p>
                    <Link to={`/services/${item._id}`}>
                      <button className="btn btn-primary">View details</button>
                    </Link>
                    <div>
                      <button
                        onClick={() => handleAdd(item)}
                        className="btn btn-primary mt-3"
                      >
                        Add service
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddService;
