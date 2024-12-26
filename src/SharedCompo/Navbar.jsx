// import { useContext } from "react";
import {  FaUnlockKeyhole, FaUserLock } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Authentication/AuthContext";
import logo from "../../public/smart.png"
import useAuth from "../Authentication/useAuth";


const Navbar = () => {
  
  const {user, userName, userPhoto, signOutUser} = useAuth() ;
  const navigate = useNavigate() ;
  // console.log(user.photoURL);
  // console.log(userPhoto);

const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/queries'>Queries</NavLink></li>
   {
    user && <>
     <li><NavLink to='/myQueries'>My Queries</NavLink></li>
    <li><NavLink to='/recommendationForMe'>Recommendation For Me</NavLink></li>
    <li><NavLink to='/myRecommendation'>My Recommendations</NavLink></li>
    </>
   }
            {/* <li><NavLink to='/'></NavLink></li> */}
</>

const handleLogout = () => {
  signOutUser()
  .then(() => {
    // console.log("user logged out");
    navigate("/login") ;
  })
  .catch(Er => console.log(Er))
}

    return (
        <>
            <div className="bg-blue-400 text-white ">
<div className="navbar py-0 max-w-7xl mx-auto">
        <div className="navbar-start ">
{
  user
  ? <>
            <div className="text-xl font-semibold flex items-center gap-2">
          <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={userPhoto} />
  </div>
</div> 
<span className="text-base-content hidden md:block">Welcome</span><span>{userName} !!</span>
</div>
  </>
  : <>  <div className="text-xl font-semibold flex items-center gap-2">Login to explore more</div> </>
}
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
               <div className="grid grid-flow-col gap-8">
                  <a href="https://x.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                 <a href="https://www.linkedin.com/"> <FaLinkedin className="text-2xl" /></a>
                </div>
          </ul>
        </div> */}
        <div className="navbar-end gap-5 items-center">
        <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 my-auto fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 my-auto fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
  
{user ? 
  <button onClick={handleLogout} className="text-xl font-semibold flex gap-1 items-center hover:text-black duration-500 "><LuLogIn />Log Out</button>
: 
<>
<Link to='/login' className="text-xl font-semibold flex gap-1 items-center hover:text-black duration-500 "><FaUnlockKeyhole />Login</Link>
<Link to='/signUp' className="text-xl font-semibold  gap-1 items-center hover:text-black duration-500 hidden md:flex"><FaUserLock />Sign up</Link>
</>
}

        </div>
      </div>
      </div>

      <div className="   sticky top-0 z-10 bg-base-100 ">
     <div className="navbar px-0 max-w-7xl mx-auto">
     <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="font-bold text-4xl font-serif flex items-center"><img src={logo} className="w-[35px] h-[35px] mr-1"></img>Smart<span className="text-blue-400">Pick</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 ">
            {links}
          </ul>
        </div>
     </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>

        </>
    );
};

export default Navbar;