

const UpdateModal = () => {

    const handleUpdateQueryBtn = () => {
        console.log("updated 2");
    }

    return (
        <dialog id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
       
      <div className="">
          <h1 className=" font-bold text-3xl font-serif text-center py-3 ">Update Query</h1>
          {/* <p className="text-gray-500 max-w-lg text-center mx-auto pb-10">Have a question about a product? Add New Query to get helpful responses!</p> */}
                  <form onSubmit={handleUpdateQueryBtn} className="w-full pt-6 space-y-4">
                      <div className="md:grid grid-cols-2 gap-5">
                      <div className="form-control">
                      <label className="label">
                        <span className="label-text">Product Name</span>
                      </label>
                      <input type="text" name='productName'  className="input input-bordered" required />
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
      
      <input type="submit" className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-1 items-center " value=" Update Query " />
      
                    {/* <button  className="btn bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-1 items-center ">
                    Update Query <MdUpload className="text-2xl" /></button> */}
      
                    <div className="form-control mt-6">
                    </div>
                  </form>
                      <div className="modal-action">
            <form method="dialog" className="">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              {/* if there is a button in form, it will close the modal */}
            </form>
          </div>
                    </div>
      
         
        </div>
      </dialog>
    );
};

export default UpdateModal;