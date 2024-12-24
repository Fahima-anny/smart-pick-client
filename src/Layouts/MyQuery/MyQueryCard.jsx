/* eslint-disable react/prop-types */
import { MdDoubleArrow, MdOutlineBackupTable } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/useAxiosSecure";



const MyQueryCard = ({ query , myQueries , setMyQueries, setSelectedQuery}) => {


    const { _id, productName, productBrand, productImage, queryTitle, currentDate } = query;
    const axiosSecure = useAxiosSecure() ;
    // console.log(query);

const handleDeleteQuery = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Once you delete it , you won't be able to revert your query back!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/queries?id=${_id}`)
            .then(res => {
                // console.log(res.data);
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Query has been deleted.",
                        icon: "success"
                      });
                      const remaining = myQueries.filter(q => q._id !== _id)
                      setMyQueries(remaining) ;
                }
            })
            .catch(er => console.log(er))
        }
      });
}

const handleUpdateBtn = () => {
    // console.log("updated 1", id);
    // setSelectedQuery(query);
    //     // console.log(query);
    //     document.getElementById('my_modal_3').showModal() ;
    //     console.log(selectedQuery);
    setSelectedQuery(query);
 
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
                        <Link 
                         to={`/queryDetails/${_id}`} 
                         className="hover:underline text-pink-500 hover:text-pink-700 font-semibold duration-500  flex-grow flex items-center "
                         >View<MdDoubleArrow className="text-xl" /></Link>

                        <button 
                        onClick={() => handleUpdateBtn(_id)} 
                        className="hover:underline text-blue-500 hover:text-blue-700 font-semibold duration-500 join-item flex-grow flex items-center gap-1 justify-center"
                        >Update <MdOutlineBackupTable /></button>

                        <button
                         onClick={handleDeleteQuery} 
                         className="hover:underline text-red-500 hover:text-red-700 font-semibold duration-500 join-item flex-grow flex items-center gap-1 justify-end"
                         >Delete<RiDeleteBin6Line /></button>
                    </div>
                </div>

            </div>

          

        </div>
    );
};

export default MyQueryCard;