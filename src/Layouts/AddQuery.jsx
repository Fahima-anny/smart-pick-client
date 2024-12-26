
// import { useContext } from "react";
import { CgAddR } from "react-icons/cg";
// import { AuthContext } from "../Authentication/AuthContext";
import useAxiosSecure from "../Authentication/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../Authentication/useAuth";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const AddQuery = () => {

    const {user} = useAuth() ;
    const axiosSecure = useAxiosSecure() ;
    const navigate = useNavigate() ;

const handleAddQuery = e => {
e.preventDefault() ;
const formData = new FormData(e.target) ;
const queryData = Object.fromEntries(formData.entries()) ;
queryData.userEmail = user.email ;
queryData.userName = user.displayName ;
queryData.userPhoto = user.photoURL ;
queryData.recommendationCount = 0 ;
queryData.currentDate = new Date(Date.now()).toString() ;
// console.log(queryData);

axiosSecure.post('/queries', queryData)
.then(res => {
    // console.log(res.data);
    if(res.data.insertedId){
        toast.success("New Query Added")
e.target.reset() ;
navigate("/myQueries") ;
    }
})
.catch(er => {
    console.log(er);
})

}

useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

    return (
<div className="">
    <Helmet>
                  <title>Smart Pick | Add Query</title>
              </Helmet>
    <h1 data-aos="fade-up"  className=" font-bold text-3xl font-serif text-center py-3 ">Add a New Query</h1>
    {/* <p className="text-gray-500 max-w-lg text-center mx-auto pb-10">Have a question about a product? Add New Query to get helpful responses!</p> */}
            <form  data-aos="fade-up"  onSubmit={handleAddQuery} className="w-full pt-6 space-y-4">
                <div className="md:grid grid-cols-2 gap-5">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type="text" name='productName' placeholder="Product Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Brand</span>
                </label>
                <input type="text" name='productBrand' placeholder="Product Brand" className="input input-bordered" required />
              </div>
                </div>

                <div className="md:grid grid-cols-2 gap-5">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image URL</span>
                </label>
                <input type="text" name='productImage' placeholder="Product Image URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query Title</span>
                </label>
                <input type="text" name='queryTitle' placeholder="Query Title" className="input input-bordered" required />
              </div>
                </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Boycotting Reason Details</span>
                </label>
                <textarea name='boycottingReason' placeholder="Boycotting Reason Details" className="textarea textarea-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-3 items-center ">
                Add Query <CgAddR className="text-xl" /></button>
              </div>
            </form>
              </div>

    );
};

export default AddQuery;