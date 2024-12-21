import Home from "./Layouts/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

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
        
      ]
    },
  ]);

