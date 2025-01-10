import ContactSection from "../Home/ContactSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

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
  className="hero min-h-[50vh] rounded-xl"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/yXLW4vh/young-joyful-business-people-happily-working-laptop-together-group-smiling-men-women-spending-time-m.jpg)",
  }}>
  <div className="hero-overlay rounded-xl bg-black bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold font-serif text-white">Contact Us</h1>
    </div>
  </div>
</div>

          <ContactSection></ContactSection>
        </div>
    );
};

export default Contact;