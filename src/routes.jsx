import Home from "./Layouts/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Layouts/Login";
import SignUp from "./Layouts/SignUp";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      errorElement: <p>this is error page</p> ,
      children: [
        {
path:'/',
element: <Home></Home>
        },
        {
path:'/login',
element: <Login></Login>
        },
        {
path:'/signUp',
element: <SignUp></SignUp>
        },

      ]
    },
  ]);

