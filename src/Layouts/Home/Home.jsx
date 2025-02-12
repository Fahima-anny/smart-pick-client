import Banner from "./Banner";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import QueriesSection from "./QueriesSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import { ClipLoader } from "react-spinners";


const Home = () => {

  const [loadingData, setLoadingData] = useState(true);

useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

useEffect(() => {
  // Simulate loading for 2 seconds
  const timer = setTimeout(() => {
    setLoadingData(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
    
    return (
      <div>
        {loadingData ? (
          <div className="flex justify-center items-center h-screen bg-white">
            <ClipLoader color="#3498db" size={50} />
          </div>
        ) : (
          <div className="space-y-5 md:space-y-20">
          <Helmet>
                <title>Smart Pick | Home</title>
            </Helmet>
           <div  data-aos="fade-in" >
           <Banner></Banner>
           </div>
           <AboutUs></AboutUs>
            <QueriesSection></QueriesSection>
           <FaqSection></FaqSection>
            <ContactSection></ContactSection>
        </div>
        )}
      </div>
    );
    
};

export default Home;