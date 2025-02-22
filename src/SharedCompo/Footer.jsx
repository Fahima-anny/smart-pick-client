import { FaLinkedin } from "react-icons/fa6";
import logo from "../../public/smart.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
      offset:100
    });
  }, []);

    return (
        <div data-aos="fade-down" className="bg-base-200 py-5 px-3 md:p-0">
            <footer className="md:footer text-base-content p-10 max-w-7xl mx-auto px-0">
  <nav className="flex flex-col justify-center items-center">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col justify-center items-center md:my-0 mt-5">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col justify-center items-center md:my-0 mt-5">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form  className="flex flex-col justify-center items-center md:my-0 mt-5">
  <a className="font-bold text-4xl font-serif flex items-center"><img src={logo} className="w-[35px] h-[35px] mr-1"></img>Smart<span className="text-blue-500">Pick</span></a>
    {/* <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Write to us</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-500 duration-500 join-item">Subscribe</button>
      </div>
    </fieldset> */}
    <p className="max-w-sm leading-7 md:my-0 my-2 ">Discover, review, and buy products you trust with honest community insights.</p>
    {/* <p>Join us now on social platforms</p> */}
    <div className="grid grid-flow-col gap-4">
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
  </form>
</footer>
<div className="footer footer-center bg-base-100 py-5 font-semibold px-3">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-blue-600">SMARTPICK</span></p>
  </aside>
</div>
        </div>
    );
};

export default Footer;