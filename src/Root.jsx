import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <h1 className="flex items-center gap-2 m-3 text-2xl font-bold"><span className=""><img className="w-6 h-6" src="/React-Dark.svg" alt="" /></span>REACT</h1>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;