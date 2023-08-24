

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Aboute from "../Pages/About/Aboute/Aboute";
import Home from "../Pages/Home/Home/Home";
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
      ],
    },
  ]);