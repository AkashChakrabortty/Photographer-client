import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const Service = () => {
  useTitle("service");
  // const loaderData = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [loaderData, setLoaderData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setLoaderData(data);
        // console.log(reviews);
        setLoading(false);
        console.log(data);
      });
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="items">
          <div className="row row-cols-sm-3 row-cols-2 mt-3 mb-3">
            {loaderData?.map((item) => {
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
                        <button className="btn btn-primary">
                          View details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
