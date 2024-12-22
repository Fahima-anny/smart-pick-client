import { Outlet } from "react-router-dom";
import Navbar from "./SharedCompo/Navbar";
import Footer from "./SharedCompo/Footer";


const Root = () => {
    return (
        <div className="relative">
           <Navbar></Navbar>
            <div className="max-w-7xl mx-auto pt-3 pb-10 px-3 md:px-5 xl:px-0">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;