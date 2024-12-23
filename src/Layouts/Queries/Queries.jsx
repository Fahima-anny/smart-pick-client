import { useLoaderData } from "react-router-dom";
import QueryCard from "../Home/QueryCard";

const Queries = () => {

const allQuery = useLoaderData() ;

    const sorted = allQuery?.data?.sort((a,b) => b.recommendationCount - a.recommendationCount) ;

    return (
        <div>
           <div className="py-5">
           <h1 className=" font-bold text-3xl font-serif text-center pb-3 ">All Queries</h1>
           <p className="text-gray-500 max-w-3xl text-center mx-auto ">Explore all user-submitted queries, featuring detailed concerns and feedback, to gain insights and contribute to resolving product-related issues.</p>
           </div>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
    {
        sorted?.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
    }
</div>

        </div>
    );
};

export default Queries;