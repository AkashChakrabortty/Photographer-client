import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import EditReview from "../components/EditReview/EditReview";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
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
        <Footer></Footer>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://server-omega-eosin.vercel.app/");
        },
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/services/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://server-omega-eosin.vercel.app/services/${params.id}`
          );
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
      {
        path: "/reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/reviews/:id",
        element: <EditReview></EditReview>,
      },
      {
        path: "/addService",
        loader: async () => {
          return fetch("https://server-omega-eosin.vercel.app/services");
        },
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
