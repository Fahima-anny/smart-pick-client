// import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../Authentication/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SignUp = () => {

    const {signUp,updateUserInfo, setUserPhoto, setUserName, googleLogin} = useAuth() ;
    const navigate = useNavigate() ;


useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);


    const handleSignUp = e => {
        e.preventDefault() ;
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.pass.value ;
        const name = form.name.value ;
        const photo = form.photo.value ;
        // console.log(email, pass, name, photo);
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
if(!regex.test(pass)){
    // toast.error("Your Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 6 characters")
    Swal.fire({
        title: "Weak Password",
        text: "Your Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 6 characters",
        icon: "error"
      });
 return
}

        // create user 
        signUp(email, pass)
        .then(res => {
            // console.log(res.user);
            updateUserInfo({displayName: name, photoURL: photo})
            .then(() => {
                // console.log("user info updated");
                setUserName(name)
                setUserPhoto(photo)
                navigate('/') ;
                      toast.success(`Welcome ${res?.user?.displayName}`)
            })
            .catch(er => console.log(er))
        })
        .catch(Er => console.log(Er))
    
    }

    
const handleGoogleLogin = () => {
    googleLogin()
    .then(res => {
    //   console.log(res.user)
    //   console.log(res.user.photoURL)
      setUserPhoto(res?.user?.photoURL)
      toast.success(`Welcome ${res?.user?.displayName}`)
      navigate('/') ;
  })
  .catch(er => {
      console.log(er)
  })
  }

    return (
        <div className="py-16 flex justify-center items-center">
            <Helmet>
                          <title>Smart Pick | Sign up</title>
                      </Helmet>
        <div data-aos="fade-right" className="card py-5 bg-base-100 w-full max-w-lg mx-auto shadow-xl shadow-base-300">
        <a className=" text-center font-bold text-3xl font-serif">Smart<span className="text-blue-400">Pick</span></a>
            <h2 className="text-gray-400 text-center mt-2">Create a new account</h2>
           <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" placeholder="photo URL" name="photo" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 "><MdLogin className="text-2xl" />Sign Up</button>
          <div className="divider">or</div>
          <button onClick={handleGoogleLogin} className="btn btn-outline duration-500"><FcGoogle className="text-2xl" />Login with Google</button>
        </div>
        <p className="text-center">Already have an account? <Link to='/login' className="text-blue-400 font-bold underline hover:text-black duration-500">Login</Link></p>
      </form>
           </div>
        </div>
    );
};

export default SignUp;