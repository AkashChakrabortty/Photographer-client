import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Nav from "../components/Nav/Nav";
import Register from "../components/Register/Register";
import Service from "../components/Service/Service";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Outlet></Outlet>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("http://localhost:5000/");
        },
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: async () => {
          return fetch("http://localhost:5000/services");
        },
        element: <Service></Service>,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
