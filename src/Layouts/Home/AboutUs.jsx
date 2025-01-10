import { useEffect } from "react";
import { GoGoal } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {


useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

    return (
        <div>

<h1
data-aos="fade-left"
className="text-center text-4xl font-bold font-serif">About Us</h1>
            <p 
            data-aos="fade-left"
            className="text-gray-500 max-w-3xl text-center mx-auto pt-3 pb-10">Welcome to our platform, where users share honest reviews, post queries, and engage in meaningful product-related discussions effortlessly.
</p>

            <div
            data-aos="fade-up"
            className="grid md:grid-cols-3 gap-16">
                <div 
                className="p-5 bg-base-200 rounded-xl ">
                <IoSettings className="text-5xl p-2 bg-red-400 text-white rounded-xl mxau" />
                    <h1 className="text-3xl font-bold font-serif py-3">What we do?</h1>
                    <p className="text-gray-500">
                    We provide a platform for posting product queries, sharing reviews, engaging with others, and making informed purchasing decisions effortlessly.</p>
                </div>
                <div className="p-5 bg-base-200 rounded-xl ">
                <RiTeamFill className="text-5xl p-2 bg-blue-500 text-white rounded-xl mxau" />
                    <h1 className="text-3xl font-bold font-serif py-3">Our Team</h1>
                    <p className="text-gray-500">
                    Our team consists of passionate developers and innovators dedicated to creating a seamless platform for authentic reviews and meaningful user interactions.</p>
                </div>
                <div className="p-5 bg-base-200 rounded-xl ">
                <GoGoal className="text-5xl p-2 bg-green-400 text-white rounded-xl mxau" />
                    <h1 className="text-3xl font-bold font-serif py-3">Our Goal</h1>
                    <p className="text-gray-500">
                    Our goal is to empower users with honest reviews, fostering informed decisions and building trust in the online shopping community.</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;