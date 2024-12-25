/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Authentication/useAxiosSecure";


const MyRecommendCard = ({myRecommend, idx}) => {

    const axiosSecure = useAxiosSecure() ;
    const {_id, recommendationReason, recommendationTitle, recommendationImage , productName, userName, userEmail, queryTitle} = myRecommend ;

    const handleDeleteRecommend = () => {
        // console.log("delete", _id);
axiosSecure.delete(`/recommendations/${_id}`)
.then(res => {
    console.log(res.data);
})
.catch(er => console.log(er))
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