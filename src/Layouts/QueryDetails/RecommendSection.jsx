


const RecommendSection = () => {
    return (
<div className=" pt-20 pb-10">
<h1 className="text-3xl font-bold font-serif text-center">Our Recommendations</h1>
<p className="max-w-3xl mx-auto pt-3 text-center text-gray-500">Discover curated recommendations tailored to your needs, helping you make informed decisions with ease and confidence in every choice</p>
        <div className="grid md:grid-cols-2 gap-10 pt-10">
            <div className="bg-base-200 py-3 px-5 rounded-2xl">
           
            <div className="flex items-center justify-center h-full">
            <h1 className="text-3xl text-gray-400">No Recommendations to show</h1>
            </div>

            </div>
            <div className="space-y-3">
                <h3 className="font-serif font-bold text-2xl text-blue-400">Make a Recommendation</h3>
                <form className="space-y-3">
                    
                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommendation Title</span>
          </label>
          <input type="text" name="recommendation" className="input input-bordered" required />
        </div>

                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommended Product Title</span>
          </label>
          <input type="text" name="recommendation" className="input input-bordered" required />
        </div>

                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommended Product Image</span>
          </label>
          <input type="text" name="recommendation" className="input input-bordered" required />
        </div>

                    <div className="form-control">
          <label className="label">
            <span className="label-text">Recommendation Reason</span>
          </label>
          <textarea type="text" name="recommendation" className="textarea textarea-bordered" required />
        </div>

<input type="submit" value="Add Recommendation" className="btn w-full bg-blue-400 text-white hover:text-black hover:bg-blue-400 duration-500 flex justify-center gap-3 items-center" />

                </form>
            </div>
        </div>
</div>
    );
};

export default RecommendSection;