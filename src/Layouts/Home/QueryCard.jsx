/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const QueryCard = ({query}) => {
    const {productName, productBrand, productImage, queryTitle, boycottingReason, userEmail, userName, userPhoto, recommendationCount, currentDate} = query ;
    return (
        <div className="card shadow-lg shadow-base-300 bg-base-100  rounded-xl">
        <figure>
          <img
          className="h-[40vh] w-full rounded-t-xl object-cover object-center hover:scale-110 duration-500"
            src={productImage}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-blue-400">{queryTitle}</h2>
          <div className="flex justify-between">
            <h3 className="font-semibold">{productName}</h3>
            <h3 className="font-semibold"><span className=" text-gray-500">Brand: </span>{productBrand}</h3>
          </div>
          <p className="text-gray-500 flex-grow">{boycottingReason.split(" ").slice(0, 10).join(" ")}...</p>
          <div className="card-actions">
            <button className="flex items-center gap-1 duration-500 hover:underline hover:text-blue-500">View Details<MdKeyboardDoubleArrowRight className="text-2xl"/></button>
          </div>
        </div>
      </div>

    );
};

export default QueryCard;