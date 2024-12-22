import { BiMailSend } from "react-icons/bi";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const ContactSection = () => {
    return (
        <div className="md:grid grid-cols-3 gap-10 pb-10">
            <div className="col-span-2 space-y-3">
                <h2 className="font-serif font-bold text-3xl ">Write to us</h2>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full" name="" id="" />
                <input type="email" placeholder="Your Email" className="input input-bordered w-full" name="" id="" />
                <textarea name="" placeholder="Write Your Message" className="textarea textarea-bordered w-full" id=""></textarea>
                <button className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-3 items-center"> <BiMailSend className="text-2xl" /> Send Message</button>
            </div>
            <div className="space-y-3">
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