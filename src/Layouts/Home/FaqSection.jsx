import { motion } from "motion/react"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqSection = () => {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}, []);

    return (
        <div className="grid md:grid-cols-2 gap-10 items-center">

        <motion.div
  data-aos="fade-right"
        animate={{ y: [null, 40, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <img src="https://i.ibb.co.com/vVc1Hz0/2618596.png" alt="" />
            </motion.div>

            <div  data-aos="fade-left"  >
            <h2 className="font-serif font-bold text-3xl pb-6 text-blue-400 pl-3">Frequently Asked Questions </h2>
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">How does SmartPick work?</div>
    <div className="collapse-content">
      <p className="text-gray-500">SmartPick allows users to review products and share their experiences, helping others make informed purchase decisions based on trusted recommendations.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Can I trust the reviews on SmartPick?</div>
    <div className="collapse-content">
      <p className="text-gray-500">Yes, all reviews are provided by real users who have purchased or used the products, ensuring authenticity and reliability.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">How do I leave a review?</div>
    <div className="collapse-content">
      <p className="text-gray-500">Simply sign up, search for the product you want to review, and share your feedback by providing a rating and detailed comments.</p>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default FaqSection;