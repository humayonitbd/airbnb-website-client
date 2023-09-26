

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Aboute from "../Pages/About/Aboute/Aboute";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Home/Home/ProductDetails";
import SignIn from "../Pages/Login/SignIn/SignIn";
import SignUp from "../Pages/Login/Signup/Signup";
// import "./index.css";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      
      children: [
        {
            path:'/', 
            element:<Home></Home>
        },
        {
            path:'/home', 
        element:<Home></Home>
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
  ]);