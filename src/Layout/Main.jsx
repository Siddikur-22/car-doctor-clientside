import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sharad/Footer/Footer";
import Navbar from "../Pages/Sharad/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;