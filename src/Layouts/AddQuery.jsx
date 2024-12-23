import { div } from "motion/react-client";
import { useContext } from "react";
import { CgAddR } from "react-icons/cg";
import { AuthContext } from "../Authentication/AuthContext";


const AddQuery = () => {

    const {user} = useContext(AuthContext) ;

const handleAddQuery = e => {
e.preventDefault() ;
const formData = new FormData(e.target) ;
const queryData = Object.fromEntries(formData.entries()) ;
queryData.userEmail = user.email ;
queryData.userName = user.displayName ;
queryData.userPhoto = user.photoURL ;
queryData.recommendationCount = 0 ;
queryData.currentDate = new Date(Date.now()).toString() ;
console.log(queryData);



}

    return (
<div className="">
    <h1 className=" font-bold text-3xl font-serif text-center py-3 ">Add a New Query</h1>
    {/* <p className="text-gray-500 max-w-lg text-center mx-auto pb-10">Have a question about a product? Add New Query to get helpful responses!</p> */}
            <form onSubmit={handleAddQuery} className="w-full pt-6 space-y-4">
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