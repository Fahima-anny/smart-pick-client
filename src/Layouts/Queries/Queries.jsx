import { Link, useLoaderData } from "react-router-dom";
import QueryCard from "../Home/QueryCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import { CgAddR } from "react-icons/cg";
// import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Queries = () => {

    const allQuery = useLoaderData();
const axiosSecure = useAxiosSecure() ;
const [queries, setQueries] = useState([]) ;
const [layout, setLayout] = useState("layout3") ;

const handleChangeLayout = layout => {
    // console.log("change", layout);
    if(layout === "layout1"){
        setLayout("layout1")
    }
    else if(layout === "layout2"){
        setLayout("layout2")
    }
    else{
        setLayout("layout3")
    }
}

// sorted data 
useEffect(() => {
    const sorted = allQuery?.data?.sort((a, b) => b.recommendationCount - a.recommendationCount);
    setQueries(sorted) ; 
}, [allQuery])

    const handleSearch = (e) => {
        e.preventDefault() ;
const searchText = e.target.searchText.value ;
// console.log(searchText);
axiosSecure.get(`/queries?search=${searchText}`)
.then(res => {
    // console.log(res.data);
    setQueries(res.data) ;
})
.catch(er => console.log(er))
    }

    useEffect(() => {
      AOS.init({
        duration: 2000,
        once: true,
        offset: 100, 
      });
    }, []);

    return (
        <div>
              <Helmet>
                            <title>Smart Pick | Queries</title>
                        </Helmet>
            <div className="pt-5 flex flex-col md:flex-row justify-center gap-3 md:justify-between">
                <h1  data-aos="fade-right" className=" font-bold text-3xl font-serif text-center pb-3 ">All Queries</h1>

                <div data-aos="fade-right" className="flex gap-2">
                        <button 
                        onClick={() => handleChangeLayout("layout1")}
                         to="/queries" 
                         className={`border border-blue-400 rounded-lg px-3 flex items-center gap-1 duration-500 
                             ${layout==="layout1" 
                                ? "bg-blue-500 text-white"
                                : "text-blue-500"
                             }`}>Layout 1</button>
                        <button 
                         onClick={() => handleChangeLayout("layout2")}
                        to="/queries" 
                        className={`border border-blue-400 rounded-lg px-3 flex items-center gap-1 duration-500 
                            ${layout==="layout2" 
                               ? "bg-blue-500 text-white"
                               : "text-blue-500"
                            }`}>Layout 2</button>
                        <button
                         onClick={() => handleChangeLayout("layout3")}
                        to="/queries" 
                        className={`border border-blue-400 rounded-lg px-3 flex items-center gap-1 duration-500 
                            ${layout==="layout3" 
                               ? "bg-blue-500 text-white"
                               : "text-blue-500"
                            }`}>Layout 3</button>
                </div>

                <form data-aos="fade-right" onSubmit={handleSearch} className="flex join join-horizontal mx-left md:mx-0">
                        <input type="text" name="searchText" className=" join-item input input-bordered max-w-40 "  placeholder="Search" />
<input className="btn bg-blue-500 text-white hover:text-black hover:bg-blue-500 duration-500 join-item" type="submit" value="Search" />
                </form >

                {/* <p className="text-gray-500 max-w-3xl text-center mx-auto ">Explore all user-submitted queries, featuring detailed concerns and feedback, to gain insights and contribute to resolving product-related issues.</p> */}
            </div>

            {
                queries?.length > 0 
                ? <div className={`grid 
                ${
                    layout==="layout1" 
                    ? "grid-cols-1"
                    : layout==="layout2" 
                    ? "grid-cols-1 md:grid-cols-2"
                    : " md:grid-cols-2 xl:grid-cols-3"
                }
                gap-10 py-10`}>
                {
                    queries?.map(query => <QueryCard 
                         key={query._id}
                         layout={layout}
                          query={query}
                          ></QueryCard>)
                }
            </div>
            : <div data-aos="fade-up"  className="bg-base-200 w-full p-5 text-center rounded-xl mt-5">
            <img className="w-72 mx-auto" src="https://i.ibb.co.com/pXdRSRv/freepik-background-98228.png" alt="" />
            <p className="text-3xl font-semibold text-gray-400">No query found !!</p>
            <Link to="/addQuery"> <button className="border font-medium mx-auto my-5 border-blue-400 rounded-lg p-3 flex items-center gap-1 text-blue-500 duration-500 hover:bg-blue-500 hover:text-white">
            Add Query <CgAddR className="text-xl" /></button></Link>
            </div>
            }

        </div>
    );
};

export default Queries;