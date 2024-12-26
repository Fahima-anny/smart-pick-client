/* eslint-disable react/no-unescaped-entities */
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import {  useEffect, useState } from "react";
// import { AuthContext } from "../../Authentication/AuthContext";
import MyQueryCard from "./MyQueryCard";
import { toast } from "react-toastify";
import useAuth from "../../Authentication/useAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const MyQuery = () => {

    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true,
        offset: 100, 
      });
    }, []);

    const [selectedQuery, setSelectedQuery] = useState(null);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [myQueries, setMyQueries] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/queries?email=${user?.email}`)
            .then(res => {
                setMyQueries(res.data);
            })
            .catch(er => console.log(er));
    }, [user, axiosSecure, selectedQuery])

    myQueries.sort((a,b)=> Date.parse(b.currentDate) - Date.parse(a.currentDate) )
   
    const handleUpdateSubmit = e => {
        e.preventDefault() ;
const form = e.target ;
const productName = form.productName.value ;
const productBrand = form.productBrand.value ;
const productImage = form.productImage.value ;
const queryTitle = form.queryTitle.value ;
const boycottingReason = form.boycottingReason.value ;

const updatedQuery = {productName, productBrand, productImage, queryTitle, boycottingReason} ;
axiosSecure.patch(`/queries/${selectedQuery._id}`, updatedQuery)
.then(res => {
    // console.log(res.data);
    if(res.data.modifiedCount > 0){
        toast.success("Your Query has been updated")
        setSelectedQuery(null);
    }
})
.catch( er => console.log(er))

    }
    const closeModal = () =>setSelectedQuery(null); 

    return (
        <div className="">
           <Helmet>
                                      <title>Smart Pick | My Queries</title>
                                  </Helmet>
            <div
             data-aos="fade-up" 
                className="hero min-h-[40vh] rounded-2xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/xhkCjMf/2303-w018-n002-1757-B-p15-1757.jpg)",
                }}>
                <div className="hero-overlay bg-gray-700 bg-opacity-30 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl text-white flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-5xl font-bold">Add New Query</h1>
                        <p className="mb-5">
                            The Add a New Query section allows users to submit their product-related concerns, ensuring quick resolutions and improving overall satisfaction.
                        </p>
                        <Link to="/addQuery"> <button className=" text-white hover:text-blue-400 border py-3 px-5  rounded-xl hover:bg-white duration-500 flex justify-center gap-3 items-center ">
                            Add Query <CgAddR className="text-xl" /></button></Link>
                    </div>
                </div>
            </div>

            <div className="pt-16">
                <h1 data-aos="fade-up"  className=" font-bold text-3xl font-serif text-center pb-3 ">My Queries</h1>
                <p data-aos="fade-up"  className="text-gray-500 max-w-3xl text-center mx-auto ">My Queries section helps you track your submitted product queries, view their status, and stay updated on responses efficiently.</p>

                <div className="py-10" data-aos="fade-up" >
                    {
                        myQueries.length > 0
 ? <div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 ">
    { myQueries.map(query => <MyQueryCard
     myQueries={myQueries}
      setMyQueries={setMyQueries}
       key={query._id} 
       query={query}
       setSelectedQuery={setSelectedQuery}
       ></MyQueryCard>)}
 </div>
 : <div className="bg-base-200 w-full p-5 text-center rounded-xl">
    <img className="w-72 mx-auto" src="https://i.ibb.co.com/pXdRSRv/freepik-background-98228.png" alt="" />
    <p className="text-3xl font-semibold text-gray-400">You hav'nt added any query yet!!</p>
    <Link to="/addQuery"> <button className="border font-medium mx-auto my-5 border-blue-400 rounded-lg p-3 flex items-center gap-1 text-blue-400 duration-500 hover:bg-blue-400 hover:text-white">
    Add Query <CgAddR className="text-xl" /></button></Link>

{/* <div className="flex justify-center">
             <Link to="/queries" className="border border-blue-400 rounded-lg p-3 flex items-center gap-1 text-blue-400 duration-500 hover:bg-blue-400 hover:text-white">View All Queries<MdKeyboardDoubleArrowRight className="text-2xl"/></Link>
             </div> */}

 </div>
                    }
                </div>

      {selectedQuery && (
                    <dialog id="update_modal" className="modal" open>
                        <div className="modal-box">
                            <button
                                onClick={closeModal}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </button>
                            <h1 className="font-bold text-3xl font-serif text-center py-3">Update Query</h1>
                            <form onSubmit={handleUpdateSubmit} className="w-full pt-6 space-y-4">
                                <div className="form-control">

                <div className="md:grid grid-cols-2 gap-5">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type="text" name='productName' defaultValue={selectedQuery?.productName} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Brand</span>
                </label>
                <input type="text" name='productBrand' defaultValue={selectedQuery?.productBrand} className="input input-bordered" required />
              </div>
                </div>

                <div className="md:grid grid-cols-2 gap-5">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image URL</span>
                </label>
                <input type="text" name='productImage' defaultValue={selectedQuery?.productImage} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query Title</span>
                </label>
                <input type="text" name='queryTitle' defaultValue={selectedQuery?.queryTitle} className="input input-bordered" required />
              </div>
                </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Boycotting Reason Details</span>
                </label>
                <textarea name='boycottingReason' defaultValue={selectedQuery?.boycottingReason} className="textarea textarea-bordered" required />
              </div>
              <div className="form-control mt-6">
              </div>


                                </div>

                                <div className="form-control mt-6">
                                    <input  className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-3 items-center" type="submit" value="Update Query" />
                                </div>
                            </form>
                        </div>
                    </dialog>
                )}

            </div>
        </div>
    );
};

export default MyQuery;