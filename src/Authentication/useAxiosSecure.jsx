import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'https://smart-pick.vercel.app',
    withCredentials: true
  });

const useAxiosSecure = () => {

const {signOutUser} = useAuth() ;
const navigate = useNavigate() ;

useEffect(() => {
  instance.interceptors.response.use( response => {
    return response ;
  } , error => {
    // console.log("error catch in interceptors", error);

if(error.status === 401 || error.status === 403){
  // console.log("mama log out");
  signOutUser()
  .then(() => {
navigate('/login')
// toast.error("Please Login Again")
  })
  .catch(er => console.log(er))
}
return Promise.reject(error) ;
  } )
} , [navigate, signOutUser ])

    return instance ;
};

export default useAxiosSecure;