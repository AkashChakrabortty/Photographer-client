import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container">
      <footer>
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

export default Footer;
