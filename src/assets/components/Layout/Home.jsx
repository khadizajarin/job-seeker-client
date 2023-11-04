import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;