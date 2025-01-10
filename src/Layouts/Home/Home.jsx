import Banner from "./Banner";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import QueriesSection from "./QueriesSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";


const Home = () => {


useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);
    
    return (
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
    );
};

export default Home;