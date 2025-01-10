import AboutUs from "../Home/AboutUs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

useEffect(() => {
  AOS.init({
    duration: 3000,
    once: true,
    offset: 100, 
  });
}, []);

    return (
        <div className="space-y-10">

<div
 data-aos="fade-in"
  className="hero min-h-[40vh] rounded-xl"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/Qd97QZp/happy-young-business-colleagues-using-laptop-computer-talking-with-each-other.jpg)",
  }}>
  <div className="hero-overlay rounded-xl bg-black bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold font-serif text-white">Hey There!!</h1>
    </div>
  </div>
</div>
            <AboutUs></AboutUs>
        </div>
    );
};

export default About;