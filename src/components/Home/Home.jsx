import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import img from "./banner.jpg";

const Home = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
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
              <div className="col">
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row col-3 mx-auto">
        <button className="btn btn-primary">see all</button>
      </div>

      <footer className="mt-3">
        <div className="d-flex justify-content-between">
          <div className="text">
            <span>© 2022 Company, Inc. All rights reserved.</span>
          </div>
          <div className="icon fs-4 d-flex gap-2">
            <BsFacebook></BsFacebook>
            <BsInstagram></BsInstagram>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
