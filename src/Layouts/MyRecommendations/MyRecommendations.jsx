import {  useEffect, useState } from "react";
// import { AuthContext } from "../../Authentication/AuthContext";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import MyRecommendCard from "./MyRecommendCard";
import useAuth from "../../Authentication/useAuth";


const MyRecommendations = () => {

const [myRecommendations, setMyRecommendations] = useState([]) ;
const {user} = useAuth() ;
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
        <th>Query Details</th>
        <th>My Recommend</th>
        <th>Query Author</th>
      </tr>
    </thead>
    <tbody>

{
    myRecommendations.map((myRecommend, idx) => <MyRecommendCard 
    key={myRecommend._id}
    setMyRecommendations={setMyRecommendations}
    myRecommendations={myRecommendations}
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