import { motion } from "motion/react"

const FaqSection = () => {
    return (
        <motion.div
        animate={{ y: [null, 40, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="grid md:grid-cols-2 gap-10 items-center">
            <div>
                <img src="https://i.ibb.co.com/vVc1Hz0/2618596.png" alt="" />
            </div>
            <div></div>
        </motion.div>
    );
};

export default FaqSection;