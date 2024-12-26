import { useEffect, useState } from "react";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import QueryCard from "./QueryCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const QueriesSection = () => {

const axiosSecure = useAxiosSecure() ;
const [queries, setQueries] = useState([]) ;

// queries.sort((a,b)=> Date.parse(b.currentDate) - Date.parse(a.currentDate) )

useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true,
    offset: 100, 
  });
}, []);

useEffect(() => {
    axiosSecure.get("/queries/only?limit=6")
    .then(res => {
        // console.log(res.data);
        setQueries(res.data);
    })
} , [axiosSecure])
// console.log(queries);
    return (
        <div  data-aos="fade-up" >
            <h1 className="text-center text-4xl font-bold font-serif">Our Queries</h1>
            <p className="text-gray-500 max-w-3xl text-center mx-auto pt-3 pb-10">Explore the Queries section to view product-related questions and answers, helping you make informed decisions before your next purchase.</p>
         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
         {
queries.map( query => <QueryCard query={query} key={query._id}></QueryCard>)
            }
         </div>
             <div className="flex justify-center">
             <Link to="/queries" className="border border-blue-400 rounded-lg p-3 flex items-center gap-1 text-blue-400 duration-500 hover:bg-blue-400 hover:text-white">View All Queries<MdKeyboardDoubleArrowRight className="text-2xl"/></Link>
             </div>
        </div>
    );
};

export default QueriesSection;