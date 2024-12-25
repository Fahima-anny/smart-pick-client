/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const QueryCard = ({query, layout}) => {
    const {_id, productName, productBrand, productImage, queryTitle, boycottingReason, userEmail, userName, userPhoto, recommendationCount, currentDate} = query ;
    return (
        <div className="card hover:shadow-lg bg-base-100 border rounded-xl duration-500">
        <figure>
          <img
          className={`
            ${
              layout === "layout1"
              ? "object-contain h-[40vh]"
              : layout === "layout2"
              ? "object-contain "
              : "object-cover h-[40vh]"
            }
            w-full rounded-t-xl  object-center hover:scale-110 duration-500`}
            src={productImage}
            alt={productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-blue-400">{queryTitle}</h2>
          <div className="flex justify-between">
            <h3 className="font-semibold">{productName}</h3>
            <h3 className="font-semibold"><span className=" text-gray-500">Brand : </span>{productBrand}</h3>
          </div>
          <p className="text-gray-500 flex-grow">{boycottingReason.split(" ").slice(0, 10).join(" ")}...</p>
          <div className="">
            <h3 className="font-semibold"><span className=" ">Recommendation Count : </span>{recommendationCount}</h3>
          </div>
          <div className="card-actions">
            <Link to={`/queryDetails/${_id}`} className="flex font-medium items-center gap-1 duration-500 hover:underline hover:text-blue-500">Recommend Now<MdKeyboardDoubleArrowRight className="text-2xl"/></Link>
          </div>
        </div>
      </div>

    );
};

export default QueryCard;