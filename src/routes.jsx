import Home from "./Layouts/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Layouts/Login";
import SignUp from "./Layouts/SignUp";
import ErrorPage from "./Layouts/ErrorPage";
import Queries from "./Layouts/Queries/Queries";
import PrivateRoute from "./Authentication/PrivateRoute";
import AddQuery from "./Layouts/AddQuery";
import MyQuery from "./Layouts/MyQuery/MyQuery";
import QueryDetails from "./Layouts/QueryDetails/QueryDetails";
import axios from "axios";
import MyRecommendations from "./Layouts/MyRecommendations/MyRecommendations";
import RecommendsForMe from "./Layouts/RecommendsForMe/RecommendsForMe";



export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      errorElement: <ErrorPage></ErrorPage> ,
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
        {
path:'/queries',
element: <Queries></Queries>,
loader: () => axios.get(`https://smart-pick.vercel.app/queries/only`, {withCredentials: true})
        },
        {
path:'/addQuery',
element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
        },
        {
path:'/myQueries',
element: <PrivateRoute><MyQuery></MyQuery></PrivateRoute>
        },
        {
path:'/myRecommendation',
element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
        },
        {
path:'/recommendationForMe',
element: <PrivateRoute><RecommendsForMe></RecommendsForMe></PrivateRoute>
        },
        {
path:'/queryDetails/:id',
element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
loader: ({params}) => axios.get(`https://smart-pick.vercel.app/queries/${params.id}`, {withCredentials: true})
        },

      ]
    },
  ]);

