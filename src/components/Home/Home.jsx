import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import discount from "./87179-50-discount.gif";
import img from "./banner.jpg";

const Home = () => {
  const loaderData = useLoaderData();
  return (
    <div className="container">
      <div className="col-8 mx-auto d-flex gap-2">
        <div className="img col-5">
          <img src={img} alt="banner" className="img-fluid" />
        </div>
        <div className="text col-5 d-flex flex-column justify-content-center">
          <h3>Photographer</h3>
          <p>
            Photographers use their technical expertise, creativity, and
            composition skills to produce and preserve images that tell a story
            or record an event.
          </p>
        </div>
      </div>
      <div className="items">
        <div className="row mt-3 mb-3">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row col-3 mx-auto">
        <Link to="/services">
          <button className="btn btn-primary">see all</button>
        </Link>
      </div>

      <div className="discount d-flex gap-2">
        <div className="animation col-5">
          <img src={discount} alt="discount" className="img-fluid" />
        </div>
        <div className="text col-5 d-flex flex-column justify-content-center">
          <h3>Get 50% discount first time booking</h3>
        </div>
      </div>

      <div className="payment text-center mb-5">
        <h2>You can Payment by</h2>
        <div className="row">
          <div className="col">
            <h3>Bkash</h3>
          </div>
          <div className="col">
            <h3>Nagad</h3>
          </div>
          <div className="col">
            <h3>Rocket</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
