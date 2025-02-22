import { useLoaderData } from "react-router-dom";
import RecommendSection from "./RecommendSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const QueryDetails = () => {

const query = useLoaderData() ;
const { productName, productBrand, productImage, queryTitle, boycottingReason, userEmail, userName, userPhoto, currentDate} = query.data ;
// console.log(query.data);

useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

    return (
     <div>
           <div className="md:grid md:grid-cols-2 gap-10 items-center md:justify-between max-w-7xl mx-auto pt-10">
        <Helmet>
                                   <title>Smart Pick | Query Details</title>
                               </Helmet>

       <div  data-aos="fade-right" >
           <img src={productImage}
               className="w-full border h-full lg:h-[500px] object-cover object-center rounded-2xl "
               alt="" />
       </div>

       <div  data-aos="fade-left"  className="flex flex-col ">
        <div className="flex gap-4 items-center border-b pb-3">
            <img src={userPhoto} className="w-12 h-12 rounded-full" alt="" />
            <div className="">
                <h3 className="font-bold">{userName}</h3>
                <h3 className="text-gray-500">{userEmail}</h3>
            </div>
        </div>
          <div className="flex flex-col justify-center gap-2 pt-3">
         
          <h3 className="font-bold text-2xl text-blue-500">{queryTitle} !!!</h3>

          <h3 className="lg:grid grid-cols-3 gap-2 border-b pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-gray-500">Product Name : </span> 
               <span className="col-span-2  ">{productName}</span>
               </h3>
          <h3 className="lg:grid grid-cols-3 gap-2 border-b pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-gray-500">Brand : </span> 
               <span className="col-span-2 ">{productBrand}</span>
               </h3>

               <h3 className="lg:grid grid-cols-3 gap-2 border-b pb-3 pt-1 font-semibold ">
               <span className="col-span-1 text-gray-500">Boycotting Reason Details : </span> 
               <span className="col-span-2">{boycottingReason}</span>
               </h3>

          <h3 className="lg:grid grid-cols-3 gap-2 border-b pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-gray-500">Created at : </span> 
               <span className="col-span-2 ">{currentDate}</span>
               </h3>
          </div>
       </div>
   </div>

<RecommendSection
query={query}
></RecommendSection>

     </div>
    );
};

export default QueryDetails;