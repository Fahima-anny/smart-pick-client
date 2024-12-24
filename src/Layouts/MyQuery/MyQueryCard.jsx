/* eslint-disable react/prop-types */
import axios from "axios";
import { MdDoubleArrow, MdOutlineBackupTable } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const MyQueryCard = ({ query }) => {

    const { _id, productName, productBrand, productImage, queryTitle, currentDate } = query;

const handleDelete = () => {
    // console.log('deleted', _id);
    axios.delete(`http://localhost:5000/queries?id=${_id}`)
    .then(res => {
        console.log(res.data);
    })
    .catch(er => console.log(er))
}

    return (
        <div className="card hover:shadow-lg bg-base-100 border rounded-xl duration-500">
            <figure>
                <img
                    className="h-[40vh] w-full rounded-t-xl object-cover object-center hover:scale-110 duration-500"
                    src={productImage}
                    alt={productName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-blue-400">{queryTitle}</h2>
                <div className="flex justify-between">
                    <h3 className="font-semibold">{productName}</h3>
                    <h3 className="font-semibold"><span className=" text-gray-500">Brand : </span>{productBrand}</h3>
                </div>
                {/* <p className="text-gray-500 flex-grow">{boycottingReason.split(" ").slice(0, 10).join(" ")}...</p> */}
                <div className="">
                    <h3 className=" text-gray-500"><span className="text-black font-semibold">Created At : </span>{currentDate}</h3>
                </div>

                <div className="card-actions justify-center pt-2">
                    <div className="flex justify-between w-full ">
                        <Link  to={`/queryDetails/${_id}`} className=" hover:text-blue-500 font-semibold duration-500  flex-grow flex items-center gap-1">View<MdDoubleArrow className="text-xl" /></Link>
                        <button className=" hover:text-blue-500 font-semibold duration-500 join-item flex-grow flex items-center gap-1 justify-center">Update <MdOutlineBackupTable /></button>
                        <button onClick={handleDelete} className=" hover:text-blue-500 font-semibold duration-500 join-item flex-grow flex items-center gap-1 justify-end">Delete<RiDeleteBin6Line /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyQueryCard;