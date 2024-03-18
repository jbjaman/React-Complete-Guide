import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <h1>WELCOME TO REACT</h1>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;