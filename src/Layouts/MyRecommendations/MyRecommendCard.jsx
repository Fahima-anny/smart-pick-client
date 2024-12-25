/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import Swal from "sweetalert2";


const MyRecommendCard = ({myRecommend, idx, myRecommendations, setMyRecommendations}) => {

    const axiosSecure = useAxiosSecure() ;
    const {_id, recommendationReason, recommendationTitle, recommendationImage , productName, userName, userEmail, queryTitle} = myRecommend ;

    const handleDeleteRecommend = () => {
        // console.log("delete", _id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/recommendations?id=${_id}`)
                .then(res => {
                    console.log(res.data);
                    if(res.data.deletedCount > 0){
                        const remaining = myRecommendations.filter( r => r._id !== _id) ;
                        setMyRecommendations(remaining) ;
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
                .catch(er => console.log(er))
            }
          });
    }

    return (
        <tr className="hover duration-300">
        <th>
         {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="avatar">
              <div className="mask mask-squircle h-16 w-16">
                <img
                  src={recommendationImage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
              <div className="text-sm opacity-70">{queryTitle}</div>
            </div>
          </div>
        </td>
        <td>
        <div className="font-bold">{recommendationTitle}</div>
        <div className="text-sm opacity-70">{recommendationReason}</div>
        </td>
        <td>
        <div className="font-bold">{userName}</div>
        <div className="text-sm opacity-70">{userEmail}</div>
        </td>
        <th>
          <button onClick={handleDeleteRecommend} > <FaDeleteLeft className="text-red-500 hover:text-red-700 duration-500 text-2xl"></FaDeleteLeft></button>
        </th>
      </tr>
    );
};

export default MyRecommendCard;