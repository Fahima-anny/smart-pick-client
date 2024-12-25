import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import MyRecommendCard from "./MyRecommendCard";


const MyRecommendations = () => {

const [myRecommendations, setMyRecommendations] = useState([]) ;
const {user} = useContext(AuthContext) ;
const axiosSecure = useAxiosSecure() ;

useEffect(() => {
axiosSecure.get(`/recommendations?email=${user.email}`)
.then(res => {
    console.log(res.data);
    setMyRecommendations(res.data) ;
})
.catch(er=> console.log(er))
} ,[axiosSecure, user])

    return (
        <div className="py-10">

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Query Detaiils</th>
        <th>My Recommend</th>
        <th>Query Author</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

{
    myRecommendations.map((myRecommend, idx) => <MyRecommendCard 
    key={myRecommend._id}
    idx={idx}
    myRecommend={myRecommend}
    ></MyRecommendCard>)
}
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyRecommendations;