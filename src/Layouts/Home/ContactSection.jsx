// import { BiMailSend } from "react-icons/bi";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(email, message);

    emailjs
        .send(
            "service_cpq7311", // Replace with your EmailJS service ID
            "template_tjal17m", // Replace with your EmailJS template ID
            {
                name: name, // Matches {{name}} in your template
                email: email, // Matches {{email}} in your template
                message: message, // Matches {{message}} in your template
            },
            "So5gNmJiB96adK6Wa" // Replace with your EmailJS public key
        )
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                // alert("Message sent successfully!");
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    // text: "I have got your message & will reply you soon",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset(); // Clear the form after submission
            },
            (error) => {
                console.error("FAILED...", error);
                // alert("Message failed to send. Please try again.");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Try again",
                });
            }
        );

}
    
    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true,
        offset: 100
      });
    }, []);

    return (
        <div className="md:grid grid-cols-3 gap-10 pb-10">

            <div data-aos="fade-right" className="col-span-2 space-y-3">
                <h2 className="font-serif font-bold text-3xl ">Write to us</h2>
               <form onSubmit={handleSubmit} className=" space-y-3">
               <input type="text" placeholder="Your Name" className="input input-bordered w-full" name="name" id="" />
                <input type="email" placeholder="Your Email" className="input input-bordered w-full" name="email" id="" />
                <textarea name="message" placeholder="Write Your Message" className="textarea textarea-bordered w-full" id=""></textarea>
                {/* <button className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-500 duration-500 flex justify-center gap-3 items-center"> <BiMailSend className="text-2xl" /> Send Message</button> */}
                <input type="submit" className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-500 duration-500 flex justify-center gap-3 items-center" value=" Send Message"  />
               </form>
            </div>

            <div  data-aos="fade-left" className="space-y-3">
            <h2 className="font-serif font-bold text-3xl pt-8 md:pt-0">Contact Details</h2>
<div className="px-3 py-2 bg-base-200 rounded-lg">
<div className="flex items-center gap-2 text-blue-500">
<FaLocationDot className="text-xl" />
<h3 className="font-bold pb-1">Address</h3>
</div>
<p className="text-gray-500">123 Maple Lane, Springfield, Illinois, 62704, United States</p>
</div>

<div className="px-3 py-2 bg-base-200 rounded-lg">
<div className="flex items-center gap-2 text-blue-500">
<FaPhoneVolume className="text-xl" />
<h3 className="font-bold pb-1">Phone</h3>
</div>
<p className="text-gray-500">+880-17-09856-551</p>
</div>

<div className="px-3 py-2 bg-base-200 rounded-lg">
<div className="flex items-center gap-2 text-blue-500">
<MdEmail className="text-xl" />
<h3 className="font-bold pb-1">Email</h3>
</div>
<p className="text-gray-500">fahima.info03@gmail.com</p>
</div>
            </div>
        </div>
    );
};

export default ContactSection;