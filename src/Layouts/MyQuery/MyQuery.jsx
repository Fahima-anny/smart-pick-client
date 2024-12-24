/* eslint-disable react/no-unescaped-entities */
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Authentication/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import MyQueryCard from "./MyQueryCard";


const MyQuery = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [myQueries, setMyQueries] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/queries?email=${user?.email}`)
            .then(res => {
                setMyQueries(res.data);
            })
            .catch(er => console.log(er));
    }, [user, axiosSecure])

    return (
        <div className="">

            <div
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
                <h1 className=" font-bold text-3xl font-serif text-center pb-3 ">My Queries</h1>
                <p className="text-gray-500 max-w-3xl text-center mx-auto ">My Queries section helps you track your submitted product queries, view their status, and stay updated on responses efficiently.</p>

                <div className="py-10">
                    {
                        myQueries.length > 0
 ? <div  className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 ">
    { myQueries.map(query => <MyQueryCard key={query._id} query={query}></MyQueryCard>)}
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

            </div>
        </div>
    );
};

export default MyQuery;