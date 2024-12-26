import { useEffect, useState } from "react";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
// import { AuthContext } from "../../Authentication/AuthContext";
import RecommendsForMeCard from "./RecommendsForMeCard";
import useAuth from "../../Authentication/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const RecommendsForMe = () => {

  const [load, setLoad] = useState(true) ;
const [recommendsForMe, setRecommendsForMe] = useState([]) ;
const axiosSecure = useAxiosSecure() ;
const {user} = useAuth() ;

useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

useEffect(() => {
    axiosSecure(`/recommendations?userEmail=${user.email}`)
    .then(res => {
        // console.log(res.data);
        setRecommendsForMe(res.data)
        setLoad(false) ;
    })
    .catch(er => console.log(er))
}, [axiosSecure, user])

if(load){
  return <div className="min-h-[80vh] flex justify-center items-center">
  <span className="loading loading-dots loading-lg"></span>
 </div>
}

    return (
        <div className="py-10">
 <Helmet>
                            <title>Smart Pick | Recommendations For Me</title>
                        </Helmet>
            <div  data-aos="fade-up" className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        
        </th>
        <th>Query Details</th>
        <th>Recommendation</th>
        <th>Recommended By</th>
        <th>Query Author</th>
      </tr>
    </thead>
    <tbody>

{
    recommendsForMe.map((myRecommend, idx) => <RecommendsForMeCard
    key={myRecommend._id}
    myRecommend={myRecommend}
    idx={idx}
    ></RecommendsForMeCard>)
}
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default RecommendsForMe;