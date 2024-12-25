/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import { toast } from "react-toastify";
import RecommendCard from "./RecommendCard";



const RecommendSection = ({query}) => {

const {user} = useContext(AuthContext) ;
  const {_id, productName, queryTitle, userEmail, userName, } = query.data ;
const axiosSecure = useAxiosSecure() ;
const [recommends, setRecommends] = useState([]) ;

useEffect(() => {
  axiosSecure.get(`/recommendations?id=${_id}`)
  .then(res => {
    console.log(res.data);
    setRecommends(res.data) ;
  })
  .catch(er => console.log(er))

} ,[_id,axiosSecure])

const handleAddRecommendation = e => {
  e.preventDefault() ;
const formData = new FormData(e.target) ;
const recomData = Object.fromEntries(formData.entries()) ;
recomData.queryId = _id ;
recomData.queryTitle = queryTitle ;
recomData.productName = productName ;
recomData.userName = userName ;
recomData.userEmail = userEmail ;
recomData.recommenderName = user.displayName ;
recomData.recommenderEmail = user.email ;
recomData.currentDate = Date.now() ;

  console.log(recomData);

axiosSecure.post("/recommendations", recomData)
.then(res => {
  console.log(res.data);
  if(res.data.insertedId){
    toast.success("Recommendation Added") ;
    setRecommends([...recommends, recomData])
    e.target.reset() ;
  }
})
.catch(er => console.log(er))
}

    return (
<div className=" pt-20 pb-10">
<h1 className="text-3xl font-bold font-serif text-center">Our Recommendations</h1>
<p className="max-w-3xl mx-auto pt-3 text-center text-gray-500">Discover curated recommendations tailored to your needs, helping you make informed decisions with ease and confidence in every choice</p>
        <div className="grid md:grid-cols-2 gap-10 pt-10">
            <div className=" rounded-2xl">
           
          {
            recommends.length > 0 
            ? <div className="space-y-3">
              {
                recommends.map(recommend => <RecommendCard 
                  setRecommends={setRecommends}
                  recommends={recommends}
                key={recommend._id}
                recommend={recommend}
                ></RecommendCard>)
              }
            </div>
            :   <div className="flex items-center justify-center h-full">
            <h1 className="text-3xl text-gray-400">No Recommendations to show</h1>
            </div>
          }

            </div>
            <div className="space-y-3">
                <h3 className="font-serif font-bold text-2xl text-blue-400">Make a Recommendation</h3>

                <form onSubmit={handleAddRecommendation} className="space-y-3">
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommendation Title</span>
          </label>
          <input type="text" name="recommendationTitle" className="input input-bordered" required />
        </div>

                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommended Product Title</span>
          </label>
          <input type="text" name="recommendationProduct" className="input input-bordered" required />
        </div>

                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommended Product Image</span>
          </label>
          <input type="text" name="recommendationImage" className="input input-bordered" required />
        </div>

                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommendation Reason</span>
          </label>
          <textarea type="text" name="recommendationReason" className="textarea textarea-bordered" required />
        </div>

<input type="submit" value="Add Recommendation" className="btn w-full bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-3 items-center" />

                </form>
            </div>
        </div>
</div>
    );
};

export default RecommendSection;