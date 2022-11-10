import React from "react";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("error page");
  return (
    <div className="container text-center">
      <h1>404!page not found</h1>
    </div>
  );
};

export default ErrorPage;
