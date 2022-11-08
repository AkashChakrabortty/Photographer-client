import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
const Service = () => {
  const loaderData = useLoaderData();
  return (
    <div className="container">
      <div className="items">
        <div className="row row-cols-3 mt-3 mb-3">
          {loaderData.map((item) => {
            return (
              <div className="col text-center">
                <div class="card">
                  <PhotoProvider>
                    <PhotoView src={item.img}>
                      <img
                        src={item.img}
                        class="card-img-top"
                        alt="img"
                        style={{ height: "200px", cursor: "pointer" }}
                      />
                    </PhotoView>
                  </PhotoProvider>

                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h5 class="card-title">{item.price}</h5>
                    <p class="card-text">
                      {item.description.slice(0, 100)}
                      {item.description.slice(0, 100) ? "..." : ""}
                    </p>
                    <button className="btn btn-primary">View details</button>
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

export default Service;
