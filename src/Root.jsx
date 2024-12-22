import { Outlet } from "react-router-dom";
import Navbar from "./SharedCompo/Navbar";
import Footer from "./SharedCompo/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;