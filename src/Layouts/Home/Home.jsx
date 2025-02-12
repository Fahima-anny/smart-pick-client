import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { ClipLoader } from "react-spinners";

import Banner from "./Banner";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import QueriesSection from "./QueriesSection";
import AboutUs from "./AboutUs";

const Home = () => {
  const [loadingData, setLoadingData] = useState(
    localStorage.getItem("homeLoaded") ? false : true
  );

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("homeLoaded")) {
      // Simulate loading for 2 seconds
      const timer = setTimeout(() => {
        setLoadingData(false);
        localStorage.setItem("homeLoaded", "true"); // Set flag in localStorage
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>

      {loadingData ? (
        <div className="flex justify-center items-center h-[70vh] bg-white">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <div>
        <div className="space-y-5 md:space-y-20">
          <Helmet>
            <title>Smart Pick | Home</title>
          </Helmet>
          <div data-aos="fade-in">
            <Banner />
          </div>
          <AboutUs />
      
        </div>
        <div className="space-y-5 md:space-y-8 mt-20">
        <QueriesSection />
            <FaqSection />
        </div>
            <ContactSection />
        </div>
      )}
    </div>
  );
};

export default Home;
