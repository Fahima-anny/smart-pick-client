/* eslint-disable react/no-unescaped-entities */
// import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Authentication/AuthContext";
import { toast } from "react-toastify";
import useAuth from "../Authentication/useAuth";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";


const Login = () => {

  const {loginUser, googleLogin, setUserPhoto} = useAuth() ;
  const navigate = useNavigate() ;
  const location = useLocation() ;
  const destination = location?.state || '/' ;
const handleLogin = e => {
    e.preventDefault() ;
    const form = e.target ;
    const email = form.email.value ;
    const pass = form.pass.value ;
    // console.log(email, pass);

    // login user 
    loginUser(email, pass)
    .then(res => {
      // console.log(res.user);
      toast.success(`Welcome ${res?.user?.displayName}`)
      navigate(destination) ;
    })
    .catch(er => {
      console.log(er);
      toast.error("Wrong Email/Password")
    })
}
const handleGoogleLogin = () => {
  googleLogin()
  .then(res => {
    // console.log(res.user)
    // console.log(res.user.photoURL)
    toast.success(`Welcome ${res.user.displayName}`)
    setUserPhoto(res?.user?.photoURL) ;
    navigate(destination) ;
})
.catch(er => {
    console.log(er)
})
}

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

    return (
           <div className="py-16 flex justify-center items-center" >
              <Helmet>
                            <title>Smart Pick | Login</title>
                        </Helmet>
        <div data-aos="fade-left" className="card py-5 bg-base-100 w-full max-w-md mx-auto shadow-xl shadow-base-300">
        <a className=" text-center font-bold text-3xl font-serif">Smart<span className="text-blue-400">Pick</span></a>
            <h2 className="text-gray-400 text-center mt-2">Login with your account</h2>
           <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 "><MdLogin className="text-2xl" />Login</button>
          <div className="divider">or</div>
          <button onClick={handleGoogleLogin} className="btn btn-outline duration-500"><FcGoogle className="text-2xl" />Login with Google</button>
        </div>
        <p className="text-center">Don't have an account? <Link to='/signUp' className="text-blue-400 font-bold underline hover:text-black duration-500">Sign Up</Link></p>
      </form>
           </div>
        </div>
    );
};

export default Login;