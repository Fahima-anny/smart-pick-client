/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const QueryCard = ({query, layout}) => {

useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

    const {_id, productName, productBrand, productImage, queryTitle, boycottingReason, userEmail, userName, userPhoto, recommendationCount, currentDate} = query ;
    return (
        <div data-aos="fade-up" className="card rounded-xl duration-500">
        <figure>
          <img
          className={`
            ${
              layout === "layout1"
              ? "object-contain h-[40vh]"
              : layout === "layout2"
              ? "object-contain"
              : "object-cover h-[40vh]"
            }
            w-full rounded-t-xl  object-center hover:scale-110 duration-500`}
            src={productImage}
            alt={productName} />
        </figure>
        <div className="card-body bg-base-200">
          <h2 className="card-title font-bold">{queryTitle}</h2>
          <div className="">
            <h3 className="font-semibold text-blue-500">{productName}</h3>
            <h3 className="font-semibold"><span className=" text-gray-500">Brand : </span>{productBrand}</h3>
          </div>
          <p className="text-gray-500 flex-grow">{boycottingReason.split(" ").slice(0, 5).join(" ")}...</p>
          <div className="">
            <h3 className="font-semibold"><span className=" ">Recommendation Count : </span>{recommendationCount}</h3>
          </div>
          <div className="card-actions">
            <Link to={`/queryDetails/${_id}`} className="flex font-medium items-center gap-1 duration-500 hover:underline hover:text-blue-500">See More<MdKeyboardDoubleArrowRight className="text-2xl"/></Link>
          </div>
        </div>
      </div>

    );
};

export default QueryCard;