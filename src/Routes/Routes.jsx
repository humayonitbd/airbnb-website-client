

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Aboute from "../Pages/About/Aboute/Aboute";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Home/Home/ProductDetails";
import SignIn from "../Pages/Login/SignIn/SignIn";
import SignUp from "../Pages/Login/Signup/Signup";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import BookingPlace from "../Pages/Dashboard/BookingPlace/BookingPlace";
import FavoritePlace from "../Pages/Dashboard/FavoritePlace/FavoritePlace";
import DislikePlace from "../Pages/Dashboard/DislikePlace/DislikePlace";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllReportPlaces from "../Pages/Dashboard/AllReportPlaces/AllReportPlaces";
import AllBookedPlace from "../Pages/Dashboard/AllBookedPlace/AllBookedPlace";
import AllPlaces from "../Pages/Dashboard/AllPlaces/AllPlaces";

// import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Aboute />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/booking-place",
        element: <BookingPlace />
      },
      {
        path: "/dashboard/favorite-place",
        element: <FavoritePlace />,
      },
      {
        path: "/dashboard/dislike-place",
        element: <DislikePlace />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />
      },
      {
        path: "/dashboard/allReportPlace",
        element: <AllReportPlaces />,
      },
      {
        path: "/dashboard/allBookedPlace",
        element: <AllBookedPlace />,
      },
      {
        path: "/dashboard/AllPlace",
        element: <AllPlaces />,
      },
    ],
  },
]);